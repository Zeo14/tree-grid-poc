import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import Tabulator from 'tabulator-tables';
import { data } from './example-table/data';
import { datatree } from './example-table/datatree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  exTable: any;
  tree: TreeNode[];
  selectedNodes3: TreeNode[];

  tab = document.createElement('div');

  table_def = [
    {
      formatter: 'rowSelection',
      titleFormatter: 'rowSelection',
      hozAlign: 'center',
      headerSort: false,
      cellClick: function (e, cell) {
        cell.getRow().toggleSelect();
      },
    },
    { title: 'dkCodeAffaire', field: 'dkCodeAffaire' },
    { title: 'libelleAffaire', field: 'libelleAffaire' },
    { title: 'dkCodeSee', field: 'dkCodeSee' },
    { title: 'libelleSee', field: 'libelleSee' },
    { title: 'dkCode', field: 'dkCode' },
    { title: 'libelle', field: 'libelle' },
  ];

  cols = [
    { field: 'dkCodeAffaire', header: 'dkCodeAffaire' },
    { field: 'libelleAffaire', header: 'libelleAffaire' },
    { field: 'dkCodeSee', header: 'dkCodeSee' },
    { field: 'libelleSee', header: 'libelleSee' },
    { field: 'dkCode', header: 'dkCode' },
    { field: 'libelle', header: 'libelle' },
  ];

  constructor() {}

  ngOnInit() {
    this.exTable = new Tabulator(this.tab, {
      selectable: true,
      dataTreeSelectPropagate: true,
      height: '300',
      layout: 'fitColumns',
      columns: this.table_def,
      movableColumns: true,
      data: data,
      dataTree: true,
      dataTreeStartExpanded: true,
      dataTreeChildField: 'children',
    });
    document.getElementById('ex-table-div').appendChild(this.tab);

    this.tree = datatree;
  }
}
