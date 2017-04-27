var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var ToDoList = (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = function (e) {
            var newState = __assign({}, _this.state, { newItemName: e.currentTarget.value });
            _this.setState(newState);
        };
        _this.addItem = function () {
            var newItem = {
                name: _this.state.newItemName,
                completed: false
            };
            var newItems = _this.state.items.concat([newItem]);
            var newState = {
                items: newItems,
                newItemName: ""
            };
            _this.setState(newState);
        };
        var milk = {
            name: "Milk",
            completed: false
        };
        var eggs = {
            name: "Eggs",
            completed: false
        };
        var bread = {
            name: "Bread",
            completed: false
        };
        _this.state = {
            items: [milk, eggs, bread],
            newItemName: ""
        };
        return _this;
    }
    ToDoList.prototype.toggleCompleted = function (index) {
        var newItems = this.state.items.slice();
        var item = {
            name: newItems[index].name,
            completed: !newItems[index].completed
        };
        newItems[index] = item;
        var newState = {
            items: newItems,
            newItemName: this.state.newItemName
        };
        this.setState(newState);
    };
    ToDoList.prototype.render = function () {
        var _this = this;
        //var itemsJSX: [JSX.Element]
        var itemsJSX = this.state.items.map(function (item) {
            return (React.createElement("li", { onClick: function () { _this.toggleCompleted(_this.state.items.indexOf(item)); } },
                item.name,
                " ",
                item.completed ? "✓" : ""));
        });
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", value: this.state.newItemName, onChange: this.onInputChange }),
            React.createElement("button", { onClick: this.addItem }, "Add"),
            React.createElement("h3", null,
                this.props.name,
                "'s To-Do List"),
            React.createElement("ul", null, itemsJSX)));
    };
    return ToDoList;
}(React.Component));
window.onload = function () {
    var el = document.getElementById("content");
    var jsx = React.createElement(ToDoList, { name: "Brooks" });
    ReactDOM.render(jsx, el);
};
//# sourceMappingURL=app.js.map