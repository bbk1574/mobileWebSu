Ext.define('MyApp.model.Phone', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'pno', type: 'auto'},
            {name: 'pname', type: 'auto'},
            {name: 'pimage', type: 'auto'}
        ]
    }
});