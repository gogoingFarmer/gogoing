import React,{Component} from 'react' // ES6写法解构赋值
/*
    ES5
    import React from 'react'
    const Component = React.Component 
*/

class App extends Component{
    render(){
        return(
            <div className='index'>
                index page
            </div>
        )
    }
}

export default App