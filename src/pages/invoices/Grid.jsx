import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'athlete', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 200 },
    { field: 'year' },
    {
      field: 'date',
      minWidth: 180,
      menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
    },
    {
      field: 'sport',
      minWidth: 200,
      menuTabs: ['filterMenuTab', 'columnsMenuTab'],
    },
    {
      field: 'gold',
      menuTabs: ['generalMenuTab'],
    },
    { field: 'silver', menuTabs: [] },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      filter: true,
    };
  }, []);
  const postProcessPopup = useCallback((params) => {
    // check callback is for menu
    if (params.type !== 'columnMenu') {
      return;
    }
    const columnId = params.column ? params.column.getId() : undefined;
    if (columnId === 'gold') {
      const ePopup = params.ePopup;
      let oldTopStr = ePopup.style.top;
      // remove 'px' from the string (AG Grid uses px positioning)
      oldTopStr = oldTopStr.substring(0, oldTopStr.indexOf('px'));
      const oldTop = parseInt(oldTopStr);
      const newTop = oldTop + 25;
      ePopup.style.top = newTop + 'px';
    }
  }, []);

  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const getMainMenuItems = useCallback((params) => {
    // you don't need to switch, we switch below to just demonstrate some different options
    // you have on how to build up the menu to return
    switch (params.column.getId()) {
      // return the defaults, put add some extra items at the end
      case 'athlete':
        const athleteMenuItems = params.defaultItems.slice(0);
        athleteMenuItems.push({
          name: 'AG Grid Is Great',
          action: () => {
            console.log('AG Grid is great was selected');
          },
        });
        athleteMenuItems.push({
          name: 'Casio Watch',
          action: () => {
            console.log('People who wear casio watches are cool');
          },
        });
        athleteMenuItems.push({
          name: 'Custom Sub Menu',
          subMenu: [
            {
              name: 'Black',
              action: () => {
                console.log('Black was pressed');
              },
            },
            {
              name: 'White',
              action: () => {
                console.log('White was pressed');
              },
            },
            {
              name: 'Grey',
              action: () => {
                console.log('Grey was pressed');
              },
            },
          ],
        });
        return athleteMenuItems;
      // return some dummy items
      case 'age':
        return [
          {
            // our own item with an icon
            name: 'Joe Abercrombie',
            action: () => {
              console.log('He wrote a book');
            },
            icon:
              '<img src="https://www.ag-grid.com/example-assets/lab.png" style="width: 14px;" />',
          },
          {
            // our own icon with a check box
            name: 'Larsson',
            action: () => {
              console.log('He also wrote a book');
            },
            checked: true,
          },
          'resetColumns', // a built in item
        ];
      // return all the default items, but remove app separators and the two sub menus
      case 'country':
        const countryMenuItems = [];
        const itemsToExclude = ['separator', 'pinSubMenu', 'valueAggSubMenu'];
        params.defaultItems.forEach((item) => {
          if (itemsToExclude.indexOf(item) < 0) {
            countryMenuItems.push(item);
          }
        });
        return countryMenuItems;
      default:
        // make no changes, just accept the defaults
        return params.defaultItems;
    }
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          postProcessPopup={postProcessPopup}
          getMainMenuItems={getMainMenuItems}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Grid