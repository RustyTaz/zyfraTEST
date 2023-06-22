"use strict";
exports.__esModule = true;
var tree_1 = require("./tree");
/**
 * Вам предлагается задача по реализации метода straighten() класса Tree (./tree.ts).
 * Метод должен преобразовать иерархическую структуру дерева, представленную
 * в виде массива объектов типа DataItem, в одномерный массив объектов типа TreeItem.
 * Ваша задача - написать код внутри метода straighten(), который выполнит
 * это преобразование.
 */
var Task = /** @class */ (function () {
    function Task() {
        var inputData = [
            {
                id: 1,
                parentId: null,
                name: "main",
                children: [
                    {
                        id: 2,
                        parentId: 1,
                        name: "child 1",
                        children: [
                            { id: 3, parentId: 2, name: "sub-child 1", children: [] }
                        ]
                    },
                    {
                        id: 4,
                        parentId: 1,
                        name: "child 2",
                        children: [
                            { id: 5, parentId: 4, name: "sub-child 1", children: [] }
                        ]
                    }
                ]
            }
        ];
        var tree = new tree_1.Tree(inputData);
        var flattenedTree = tree.straighten();
        console.log(flattenedTree);
        /**
         * Необходимо получить следующий массив
         *
         * [
         * { id: 1, parentId: null, name: "main" },
         * { id: 2, parentId: 1, name: "child 1" },
         * { id: 3, parentId: 2, name: "sub-child 1" },
         * { id: 4, parentId: 1, name: "child 2" },
         * { id: 5, parentId: 4, name: "sub-child 1" },
         * ]
         */
    }
    return Task;
}());
new Task();
