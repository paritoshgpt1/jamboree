/**
* Types.js
*
* @description :: types model imported from MySql server at 23/6/2017 16:38:14.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  tableName: 'types',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id : {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    symbol : {
      type: 'string',
      size: 10
    },
    meaning : {
      type: 'string',
      size: 100
    }
  }
};
