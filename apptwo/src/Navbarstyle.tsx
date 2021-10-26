import styled from 'styled-components' 

export const Container = styled.div`
box-sizing: border-box;
  margin: 0;
  padding: 0;
`
export const Header=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  background-color: #24252a;
  & .logo {
    cursor: pointer;
    color:#fff;
  }
  & .menu {
    display: none;
  }
  & .cta {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: #edf0f1;
    text-decoration: none;

 padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  }
  & .cta:hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
  
  
`
export const Nav = styled.div`
.nav_links {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #edf0f1;
  text-decoration: none;

  list-style: none;
  display: flex;
& li {
  padding: 0px 20px; 
}
}
& a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #edf0f1;
  text-decoration: none;

  transition: color 0.3s ease 0s;
}
& a:hover {
  color: #0088a9;
}

`
export const Overlay = styled.div`
height: 100%;
width: 0;
position: fixed;
z-index: 1;
left: 0;
top: 0;
background-color: #24252a;
overflow-x: hidden;
transition: width 0.5s ease 0s;

position: absolute;
top: 20px;
right: 45px;
font-size: 60px;
color: #edf0f1;
& .close{
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #edf0f1;

}
& a {
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: color 0.3s ease 0s;
}

`
export const Overlaycontent = styled.div`
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
& a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #edf0f1;
  text-decoration: none;
}
`
