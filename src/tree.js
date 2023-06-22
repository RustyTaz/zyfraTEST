"use strict";
exports.__esModule = true;
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(data) {
        this.data = data;
    }
    Tree.prototype.straighten = function () {
        var out = [];
        var flattenTree = function (node, parentId) {
            if (node) {
                out.push({
                    id: node.id,
                    parentId: parentId,
                    name: node.name
                });
                if (node.children && node.children.length > 0) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        flattenTree(child, node.id);
                    }
                }
            }
        };
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var node = _a[_i];
            flattenTree(node, null);
        }
        return out;
    };
    return Tree;
}());
exports.Tree = Tree;
