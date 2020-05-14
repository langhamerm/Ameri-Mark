import React, { Component } from "react";
import './blog.css';
import Post from '../components/Post';
class Blog extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
          {/* Blog Entries Column */}
          <div className="col-md-8" style={{marginTop: '5em'}}>
            {/* Blog Post */}
          <Post
          img="http://placehold.it/750x300"
          title="Post Title"
          text="Nam ipsum erat, ultrices id sem at, ultricies vehicula mauris. Pellentesque porttitor gravida ipsum vel suscipit. Fusce in est ut augue sagittis dapibus at eu sapien. Proin elementum, lectus eu rutrum molestie, purus urna condimentum felis, et congue libero erat ut metus. Aliquam ut sapien vel massa sagittis vehicula. Nullam ligula dolor, aliquam ut vehicula eget, euismod vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc accumsan justo tristique nulla condimentum auctor. Curabitur finibus sapien vitae velit porttitor porttitor. Cras porta ex mauris, sit amet tristique ex cursus ut. Praesent quis iaculis dui."
          date="12/25/2020"
          author="Mark Langhamer"
          />
            {/* Blog Post */}
            <Post
          img="http://placehold.it/750x300"
          title="Post Title"
          text="Nam ipsum erat, ultrices id sem at, ultricies vehicula mauris. Pellentesque porttitor gravida ipsum vel suscipit. Fusce in est ut augue sagittis dapibus at eu sapien. Proin elementum, lectus eu rutrum molestie, purus urna condimentum felis, et congue libero erat ut metus. Aliquam ut sapien vel massa sagittis vehicula. Nullam ligula dolor, aliquam ut vehicula eget, euismod vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc accumsan justo tristique nulla condimentum auctor. Curabitur finibus sapien vitae velit porttitor porttitor. Cras porta ex mauris, sit amet tristique ex cursus ut. Praesent quis iaculis dui."
          date="12/25/2020"
          author="Mark Langhamer"
          />
            {/* Blog Post */}
            <Post
          img="http://placehold.it/750x300"
          title="Post Title"
          text="Nam ipsum erat, ultrices id sem at, ultricies vehicula mauris. Pellentesque porttitor gravida ipsum vel suscipit. Fusce in est ut augue sagittis dapibus at eu sapien. Proin elementum, lectus eu rutrum molestie, purus urna condimentum felis, et congue libero erat ut metus. Aliquam ut sapien vel massa sagittis vehicula. Nullam ligula dolor, aliquam ut vehicula eget, euismod vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc accumsan justo tristique nulla condimentum auctor. Curabitur finibus sapien vitae velit porttitor porttitor. Cras porta ex mauris, sit amet tristique ex cursus ut. Praesent quis iaculis dui."
          date="12/25/2020"
          author="Mark Langhamer"
          />
            {/* Pagination */}
            <ul className="pagination justify-content-center mb-4">
              <li className="page-item">
                <a className="page-link" href="#">← Older</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Newer →</a>
              </li>
            </ul>
          </div>
          {/* Sidebar Widgets Column */}
          <div className="col-md-4" style={{marginTop: '5em'}}>
            {/* Search Widget */}
            <div className="card my-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
            {/* Categories Widget */}
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Side Widget */}
            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
              </div>
            </div>
          </div>
        </div>
        
        {/* /.row */}
      </div>
      

     ) }
}
export default Blog




