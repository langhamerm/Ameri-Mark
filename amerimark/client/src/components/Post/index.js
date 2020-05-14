import React from "react";
import "./style.css";

function Post(props) {
  return (

  <div className="card mb-4">
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
  <h2 className="card-title">{props.title}</h2>
  <p className="card-text">{props.text}</p>

    <a href="#" className="btn btn-primary">Read More →</a>
  </div>
  <div className="card-footer text-muted">
    Posted on {props.date} by {props.author}
    
  </div>
</div>
  );
}

export default Post;

  //   <article>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-lg-8 col-md-10 mx-auto">
  // <p>{props.p1}</p>
  // <p>{props.p2}</p>
  // <p>{props.p3}</p>
  // <p>{props.p4}</p>
  // <h2 className="section-heading">{props.h1}</h2>
  //           <p>{props.p5}</p>
  // <p>{props.p6}</p>

          
          
  //           <blockquote className="blockquote">
  //           {props.quote}
  //           </blockquote>
  //             <p>{props.p7}</p>
  //           <h2 className="section-heading">
  //           {props.h2}
  //           </h2>

  //             <p>{props.p8}</p>
  //           <a href="#">
  //             <img className="img-fluid" src={props.src} alt={props.alt} />
  //           </a>
  //           <span className="caption text-muted">
  //               {props.caption}
  //           </span>
  //             <p>{props.p9}</p>
  //             <p>{props.p10}</p>
  //             <p>{props.p11}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </article>