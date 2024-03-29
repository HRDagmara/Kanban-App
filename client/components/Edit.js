import React, { Component } from 'react';


export default class Edit extends Component {
    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }

    }
    finishEdit = (e) => {
        const value = e.target.value;
        if (this.props.onUpdate) {
            this.props.onUpdate (value.trim())
        }

    }
    renderDelete = () => {
        return <button onClick={this.props.onDelete}>×</button>;
    }
    renderValue = () => {
        const { value, onDelete, onValueClick } = this.props;

        return (
            <div>
                <span onClick={onValueClick}>{value}</span>
                {onDelete ? this.renderDelete() : null}
            </div>
        );
    }

    renderEdit = () => {
        return (
            <input
                type="text"
                autoFocus
                defaultValue={this.props.value}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
            />
        );

    }
    render() {
        return (
            <div className={this.props.className}>
                {this.props.editing ? this.renderEdit() : this.renderValue()}
            </div>
        );
    }
}
