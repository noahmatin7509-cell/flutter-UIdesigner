const widgetController = {
  getBasicWidgets: (req: any, res: any) => {
    res.json({
      data: [
        { type: 'Text', name: 'Text Widget' },
        { type: 'Button', name: 'Button Widget' },
        { type: 'TextField', name: 'Text Input' },
        { type: 'Image', name: 'Image Widget' },
        { type: 'Icon', name: 'Icon Widget' },
      ],
    })
  },

  getLayoutWidgets: (req: any, res: any) => {
    res.json({
      data: [
        { type: 'Column', name: 'Column Layout' },
        { type: 'Row', name: 'Row Layout' },
        { type: 'Stack', name: 'Stack Layout' },
        { type: 'Container', name: 'Container' },
        { type: 'Scaffold', name: 'Scaffold' },
      ],
    })
  },

  getAdvancedWidgets: (req: any, res: any) => {
    res.json({
      data: [
        { type: 'ListView', name: 'List View' },
        { type: 'GridView', name: 'Grid View' },
        { type: 'TabBar', name: 'Tab Bar' },
        { type: 'Card', name: 'Card Widget' },
        { type: 'AppBar', name: 'App Bar' },
      ],
    })
  },
}

export default widgetController