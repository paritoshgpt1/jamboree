/**
* Child.js
*
* @description :: child model imported from MySql server at 23/6/2017 16:37:57.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 'child',

  attributes: {
    id : {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id : {
      type: 'integer'
    },
    word : {
      type: 'string',
      size: 100
    },
    type_id : {
      type: 'integer'
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
