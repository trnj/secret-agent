import * as fs from 'fs';
import IPageOverride from '@secret-agent/emulators/interfaces/IPageOverride';

const cache: { [name: string]: string } = {};
const shouldCache = process.env.NODE_ENV === 'production';

const utilsScript = fs.readFileSync(`${__dirname}/utils.js`, 'utf8');

export default function getOverrideScript(name: string, args?: any): IPageOverride {
  let script = cache[name];
  if (!script) {
    script = fs.readFileSync(`${__dirname}/${name}.js`, 'utf8');
  }
  if (shouldCache) cache[name] = script;
  return {
    script: buildExecutionScript(name, script, args),
  };
}

function buildExecutionScript(name: string, script: string, args?: any) {
  return `(async function newDocumentScript_${name}() {
    ${utilsScript}
   
    // documentElement is not loaded  
    if ('${name}' === 'polyfill' && !document.documentElement) {
      await new Promise(resolve => {
        new MutationObserver((list, observer) => {
          resolve();
          observer.disconnect();
        }).observe(document, {childList: true, subtree: true});
      });
    }
    
    (function ${name}(args) {
      ${script}
    })(${JSON.stringify(args)});
})()
//# sourceURL=__secretagent_bootscript__
`.replace(/\/\/# sourceMap.+/g, '');
}
