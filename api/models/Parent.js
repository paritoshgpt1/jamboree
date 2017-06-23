/**
* Parent.js
*
* @description :: parent model imported from MySql server at 23/6/2017 16:38:6.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 'parent',

  attributes: {
    id : {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    word : {
      type: 'string',
      size: 100
    },
    createdAt : {
      type: 'datetime',
      columnName: 'created_at'
    },
    updatedAt : {
      type: 'datetime',
      columnName: 'updated_at'
    }
  }
};
