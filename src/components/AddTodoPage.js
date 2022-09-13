import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addTodoToDatabaseAction} from '../actions/todoActions'

const AddTodoPage = (props) => {
    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        const obj ={title,description}
        props.addTodoFunc(obj)
    }
  return (
    <div className='mx-auto w-50 mt-4'>
        <div className="card">
            <div className="card-header text-center">
                You Have .... Todo
            </div>
            <div className="card-body">
                <form onSubmit={onSubmitHandler}>
                    <input onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title' className="form-control" />
                    <input onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Description' className="form-control" />
                    <button className="btn btn-sm btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps=state=>{
    return{

    }
}

const mapDispatchToProps = dispatch=>{
    return{
        addTodoFunc : (blog)=>dispatch(addTodoToDatabaseAction(blog))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodoPage)