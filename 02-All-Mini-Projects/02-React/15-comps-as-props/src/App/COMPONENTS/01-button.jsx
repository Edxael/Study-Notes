import React from 'react'

class MyButton extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => { this.props.executive(this.props.command) }}
        >{(this.props.command) ? 'Add One' : 'Substrac One'}
        </button>

      </div>
    )
  }
}

export default MyButton;