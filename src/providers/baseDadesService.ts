import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class BaseDadesService {

  // public properties

  db: SQLiteObject = null;

  constructor() {}

  // public methods

  assignarBD(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  crear(tasca: any){
    let sql = 'INSERT INTO tasques(titol, completada) VALUES(?,?)';
    return this.db.executeSql(sql, [tasca.titol, tasca.completada]);
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasques(id INTEGER PRIMARY KEY AUTOINCREMENT, titol TEXT, completada INTEGER)';
    return this.db.executeSql(sql, []);
  }

  esborrar(task: any){
    let sql = 'DELETE FROM tasques WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }

  recuperarTots(){
    let sql = 'SELECT * FROM tasques';
    return this.db.executeSql(sql, [])
      .then(response => {
        let tasques = [];
        for (let index = 0; index < response.rows.length; index++) {
          tasques.push( response.rows.item(index) );
        }
        return Promise.resolve( tasques );
      })
      .catch(error => Promise.reject(error));
  }

  actualitzar(tasca: any){
    let sql = 'UPDATE tasques SET titol=?, completada=? WHERE id=?';
    return this.db.executeSql(sql, [tasca.titol, tasca.completada, tasca.id]);
  }

}
