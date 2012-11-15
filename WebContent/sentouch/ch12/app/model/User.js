Ext.define('Phonem.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'uid', type: 'auto'},
            {name: 'uname', type: 'auto'},
            {name: 'upassword', type: 'auto'}
        ]
    }
});