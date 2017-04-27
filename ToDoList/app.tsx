interface Props {
    name: string;
}

interface ToDoItem {
    name: string;
    completed: boolean;
}

interface State {
    items: ToDoItem[];
    newItemName: string;
}

class ToDoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const milk = {
            name: "Milk",
            completed: false
        };
        const eggs = {
            name: "Eggs",
            completed: false
        };
        const bread = {
            name: "Bread",
            completed: false
        };
        this.state = {
            items: [milk, eggs, bread],
            newItemName: ""
        };
    }

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            newItemName: e.currentTarget.value
        };
        this.setState(newState);
    }

    addItem = () => {
        const newItem = {
            name: this.state.newItemName,
            completed: false
        };
        const newItems = [...this.state.items, newItem];
        const newState = {
            items: newItems,
            newItemName: ""
        };
        this.setState(newState);
    }

    toggleCompleted(index: number) {
        const newItems = this.state.items.slice();
        const item = {
            name: newItems[index].name,
            completed: !newItems[index].completed
        }
        newItems[index] = item;
        const newState = {
            items: newItems,
            newItemName: this.state.newItemName
        }
        this.setState(newState);
    }

    render() {
        //var itemsJSX: [JSX.Element]
        const itemsJSX = this.state.items.map(item => { return (
            <li onClick={() => { this.toggleCompleted(this.state.items.indexOf(item)) }}>
                {item.name} {item.completed ? "✓" : ""}
            </li>
        )});
        
        return (
            <div>
                <input type="text" value={this.state.newItemName} onChange={this.onInputChange} />
                <button onClick={this.addItem}>Add</button>
                <h3>{this.props.name}'s To-Do List</h3>
                <ul>
                    {itemsJSX}
                </ul>
            </div>
        );
    }
}

window.onload = () => {
    const el = document.getElementById("content");
    const jsx = <ToDoList name="Brooks"/>;
    ReactDOM.render(jsx, el);
};