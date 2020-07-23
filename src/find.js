import React,{Component} from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import {Link} from 'react-router-dom';

class Find extends Component
{
    render(){
  return <>
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
  </>
    }
}

export default Find;