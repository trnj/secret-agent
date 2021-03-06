import { LocationStatus } from '@secret-agent/core-interfaces/Location';
import { Database as SqliteDatabase } from 'better-sqlite3';
import IPage from '@secret-agent/core-interfaces/IPage';
import BaseTable from '../lib/BaseTable';

export default class PagesTable extends BaseTable<IPageRecord> {
  constructor(readonly db: SqliteDatabase) {
    super(
      db,
      'Pages',
      [
        ['id', 'INTEGER', 'NOT NULL PRIMARY KEY'],
        ['frameId', 'INTEGER'],
        ['startCommandId', 'INTEGER'],
        ['requestedUrl', 'TEXT'],
        ['finalUrl', 'TEXT'],
        ['navigationReason', 'TEXT'],
        ['initiatedTime', 'TEXT'],
        ['httpRequestedTime', 'TEXT'],
        ['httpRespondedTime', 'TEXT'],
        ['httpRedirectedTime', 'TEXT'],
        ['domContentLoadedTime', 'TEXT'],
        ['allContentLoadedTime', 'TEXT'],
      ],
      true,
    );
    this.defaultSortOrder = 'initiatedTime ASC';
  }

  public insert(page: IPage) {
    const record = [
      page.id,
      page.frameId,
      page.startCommandId,
      page.requestedUrl,
      page.finalUrl,
      page.navigationReason,
      page.initiatedTime,
      page.stateChanges.get(LocationStatus.HttpRequested)?.toISOString(),
      page.stateChanges.get(LocationStatus.HttpResponded)?.toISOString(),
      page.stateChanges.get(LocationStatus.HttpRedirected)?.toISOString(),
      page.stateChanges.get(LocationStatus.DomContentLoaded)?.toISOString(),
      page.stateChanges.get(LocationStatus.AllContentLoaded)?.toISOString(),
    ];
    this.queuePendingInsert(record);
  }

  public last() {
    return this.db
      .prepare(`select * from ${this.tableName} order by initiatedTime desc limit 1`)
      .get() as IPageRecord;
  }
}

export interface IPageRecord {
  id: number;
  frameId: number;
  requestedUrl: string;
  finalUrl?: string;
  startCommandId: number;
  navigationReason: string;
  initiatedTime: string;
  httpRequestedTime: string;
  httpRespondedTime: string;
  httpRedirectedTime?: string;
  domContentLoadedTime?: string;
  allContentLoadedTime?: string;
}
