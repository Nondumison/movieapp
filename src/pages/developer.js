import React, {useState, useEffect } from 'react';

const Developer = () => {


    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh'
        }}
        >
       

		<form>
  <div class="form-group">
    
    <input type="text" class="form-control " id="formGroupExampleInput" style={{width:"100%"}} placeholder="Fist Name"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Username"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email Address"/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Phone Number"/>
  </div>
  <button type="button" class="btn btn-lg btn-primary" style={{backgroundColor:"green"}}disabled>Get Movies</button>

</form>
        </div>
    );
};

export default Developer;
