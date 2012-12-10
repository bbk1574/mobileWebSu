Ext.define('Phonem.model.Phone', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'pno', type: 'auto'},
            {name: 'pname', type: 'auto'},
            {name: 'pimage', type: 'auto'},
            {name: 'pcompany', type: 'auto'},
            {name: 'pprice', type: 'auto'},
            {name: 'pcolor', type: 'auto'}
        ]
    }
});