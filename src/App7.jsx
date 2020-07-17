import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// const App7=()=>{
//     return (
//         <React.Fragment>
//         <h1 className='text-center mt-5 text-danger'> Welcome </h1>
//         <button className="btn btn-success"> Click Here </button>
//         </React.Fragment>
//     );
// };

// export default App7;

// Mini Project on Bootstrap in React Js


const App7 = () => {
    return (
        <React.Fragment>

            <h1 className='text-danger text-center mt-5'> A Welcome To This Mini Project. </h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <div class="card"> 
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-sm">
                    <div class="card"> 
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-sm">
                    <div class="card"> 
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default App7;