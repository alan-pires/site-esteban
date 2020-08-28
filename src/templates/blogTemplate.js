import React from 'react'
import {graphql} from "gatsby"
import '../global.css'
import './blogTemplate.css'
import Header from "../components/header" 
import Head from '../components/head'

const  BlogTemplate = props => {

    return (
        <>
        <Head title="Post"/>
        <Header/> 
        <section className="mainBlogTemplate">  
           
        </section>    
        </> 
    )
}

export default BlogTemplate