xcomponents.appVersion = '0.1';
xcomponents.menuOptions = [
    
    { label : 'Resilify app', url : '/', icon : 'fa-dashboard' }
    
  ];

xcomponents.models['dataObject'] = {
  name : 'Data object',
  fields : [
    { label : 'Name' , field: 'name', required: true},
    { label : 'Scope/module', field : 'scope', type : 'select', options : ['System', 'Overview module', 'Dashboard module', 'Document Library module', 'Workbook module']},
    { label : 'Attributes', field : 'attributes', type : 'multiline'},
    { label : 'Last update', field : 'updated', type : 'date', edit : false},
    { label : 'Details' , field: 'details', type : 'multiline' }
  
  ]
};