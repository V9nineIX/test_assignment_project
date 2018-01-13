import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from 'react-responsive';

class App extends Component {


  render() {
    return (
      <div class="app">

        <section className="h-100">
          <header className="container h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="d-flex flex-column">
                <img src="img/logo.png" />
              </div>
            </div>
          </header>
        </section>

        <section className="top-menu">
          <div className="container h-100" >

  
              <div className="row">

                    <div className="col-sm-1 col-md-4">
              
                    </div>

                    <MediaQuery query="(min-device-width: 1224px)">
                      <div className="col">
                      <div className="row justify-content-md-center">
                        <a className="navbar-brand" href="#">What we are</a>
                        <a className="navbar-brand" href="#">What we do</a>
                        </div>
                      </div>
                    </MediaQuery>

                    <MediaQuery query="(max-device-width: 1224px)">
                      {/*  for mobile device   */}
                      <div className="col">

                      </div>
                    </MediaQuery>

             

                    <div className="col">

                     <a className="navbar-brand" href="#">EN</a>
                        <a className="navbar-brand" href="#">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <a className="navbar-brand" href="#">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                        <a className="navbar-brand" href="#">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        </a>


                    </div>

        
              </div>

    


          </div>
        </section>

        <section className="h-100 text-header">
          <div className="container h-100 ">
            <div className="d-flex align-items-center justify-content-center header-text-warp">
              <div className="d-flex flex-column">
                <img src="img/header_icon.png" className="header-logo " />
              </div>

              <div className="d-flex flex-column header-text">

                <h1>นิทรรศการ</h1>
              </div>
            </div>
          </div>
        </section>


        <section className="container h-100  content">


          <div className="row detail-row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src="img/img1.png" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h3 className="detail-title" >ห้องพระราชประวัติ <br /> สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี </h3>
              <hr className="h-line" />
              <p>"...แวดวงชีวิตของฉันแต่ไหนแต่ไรมามีอยู่สองประการคือวงการวิชาการแวดวงของครูบาอาจารย์ผู้รู้
                  ในสาขาวิชาต่างๆทั้งในสายศิลปวัฒนธรรมและเทคโนโลยีกับอีกวงการคือเรื่องของการพัฒนาสังคมให้เจริญก้าวหน้างานที่
                  เห็นพ่อแม่ทำมาตลอดตั้งแต่รู้ความคือการทำให้ผืนแผ่นดินและทุกคนในแผ่นดินมีความเจริญรุ่งเรืองเน้นหนักในการ
                  ช่วยเหลือผู้ด้อยโอกาสผู้ที่มีความทุกข์ยากเราคลุกคลีอยู่กับคนที่ลำบากยากแค้นหาทางบรรเทาความเดือดร้อนของคน..."


              </p>

              <p className="small-text">สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี "ทัศนะจากอินเดีย" พ.ศ. ๒๕๓๑</p>
              <button className="btn btn-puple">ชมนิทรรศการ</button>
            </div>
          </div>




          <div className="row detail-row">


          <MediaQuery query="(max-device-width: 1224px)">
               {/*  for mobile device   */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src="img/img2.png" className="img-fluid" />
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7">
              <h3 className="detail-title" >ห้องพิพิธภัณฑ์ <br />เครื่องปั่นดินเผาในประเทศไทย </h3>
              <hr className="h-line" />
              <p>
                โบราณวัตถุที่ทำด้วยดินเผา นับเป็นหลักฐานทางโบราณคดีที่สำคัญในการศึกษาแหล่งโบราณคดีและเมืองโบราณในประเทศไทยเพื่อให้ทราบถึงวิถีชีวิตและ พัฒนาการทางสังคมและ
              วัฒนธรรมของชุมชนในอดีต ศูนย์มานุษยวิทยาสิรินธร (องค์การมหาชน) จึงได้จัดทำ “พิพิธภัณฑ์เครื่องปั้นดินเผาที่ทำในประเทศไทย”
              เพื่อนำเสนอให้ผู้เข้าชมได้เข้าใจถึงพัฒนาการของเครื่องปั้นดินเผา ที่ปรับเปลี่ยนไปตามรูปแบบวัฒนธรรมเจริญขึ้น
              </p>

              <button className="btn btn-puple">ชมนิทรรศการ</button>
            </div>

            </MediaQuery>

            <MediaQuery query="(min-device-width: 1224px)">
                {/*  for desktop   */}
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h3 className="detail-title" >ห้องพิพิธภัณฑ์ <br />เครื่องปั่นดินเผาในประเทศไทย </h3>
              <hr className="h-line" />
              <p>
                โบราณวัตถุที่ทำด้วยดินเผา นับเป็นหลักฐานทางโบราณคดีที่สำคัญในการศึกษาแหล่งโบราณคดีและเมืองโบราณในประเทศไทยเพื่อให้ทราบถึงวิถีชีวิตและ พัฒนาการทางสังคมและ
              วัฒนธรรมของชุมชนในอดีต ศูนย์มานุษยวิทยาสิรินธร (องค์การมหาชน) จึงได้จัดทำ “พิพิธภัณฑ์เครื่องปั้นดินเผาที่ทำในประเทศไทย”
              เพื่อนำเสนอให้ผู้เข้าชมได้เข้าใจถึงพัฒนาการของเครื่องปั้นดินเผา ที่ปรับเปลี่ยนไปตามรูปแบบวัฒนธรรมเจริญขึ้น
              </p>

              <button className="btn btn-puple">ชมนิทรรศการ</button>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src="img/img2.png" className="img-fluid" />
            </div>

            </MediaQuery>



          </div>





          <div className="row detail-row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src="img/img3.png" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h3 className="detail-title" >นิทรรศการ <br /> 10 คนทำพิพิธภัณฑ์ บันทึกประสบการณ์และการทำงาน </h3>
              <hr className="h-line" />
              <p>
                ตลอดระยะเวลาการทำงานกว่า 10 ปี ที่ผ่านมาแนวคิดสำคัญประการหนึ่งในการทำงานของศูนย์ฯ คือ การเปิดพื้นที่ให้คนทำพิพิธภัณฑ์มีโอกาสถ่ายทอดประสบการณ์
              แลกเปลี่ยนความคิดเห็น ด้วยรูปแบบและวิธีการต่างๆ ที่หลากหลาย
              </p>

              <button className="btn btn-puple">ชมนิทรรศการ</button>
            </div>
          </div>



     
          <div className="d-flex justify-content-center">
            
                <button className="btn btn-puple btn-big">ดูเพิ่มเติม</button>
              
            </div>
            
         
          <br/>

        </section> 


        <br/>
        <section className="footer-line">
        </section>

        <br/>

        <footer>
        <div className="d-flex justify-content-center">
           <p> Copyright © 2003-2017 prince maha chakri sirindhorn anthropology centre. All rights reserved  </p>
        </div>

        </footer>





      </div>
    );
  }
}

export default App;
