import {ChangeEvent, Component} from 'react';
import Button, {Type} from "./Button";

export interface ListItem {
    id:string,
    title:string
}

interface IProps {
    list: ListItem[];
    handleAddItem: (item:ListItem) => void;
}


interface IState {
    value:string
}

class ToDoList extends Component<IProps, IState> {
    state={
        value:""
    }

    handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            value:e.target.value
        })
    }

    handleClick=()=>{
        this.props.handleAddItem({
            id:`${Math.random()}`,
            title:this.state.value
        })

        this.setState({
            value:''
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                       onChange={this.handleChange}
                       value={this.state.value}/>
                <Button type={Type.submit}
                    handleClick={this.handleClick}>
                    Add
                </Button>

                <div>
                    {this
                        .props
                        .list
                        .map((
                            item:ListItem
                        )=><div key={item.id}>
                            {item.title}
                        </div>)}

                </div>
            </div>
        );
    }
}

export default ToDoList;