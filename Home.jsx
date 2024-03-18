import React from 'react'
import './App.css'

import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
<div id="color">
 
<div class="container">
  <div class="row">

  <div class="col-sm-4">
<center>
  <img src='https://www.themealdb.com/images/meal-icon.png' width="250px;"/>

</center>
</div>
<br/>
<div class=" col-sm-4" id='text'>
  <h1>Welcome to TheMealDB</h1>
<p><p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
<center>
<button type="button" class="btn btn-primary btn-sm px-5">PayPal</button><br/>
</center>

<p><span>button above to upgrade free API to premium for $3</span>
Currently (54 supporters)</p>
</div>
<div class="col-sm-4">
<center>
<img src='https://www.themealdb.com/images/meal-icon.png'width="250px;"/>
</center>
</div>



  </div>
</div><hr/>

<div class="container">
  <div class="row" id='center'>
 
 
  <center>
      <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/><br/>
      
        <button class="btn btn-outline-success" type="submit">Search</button>
     
      </form></center>

      <div id='next'>
      <p><img src='https://www.themealdb.com/images/icons/meal-icon6.png' width="10px;" height="10px;"/>
      Total Meals: 302</p></div>
      <div>
     <p><img src='https://www.themealdb.com/images/icons/meal-icon4.png' width="10px;" height="10px;"/>
     Total Ingredients: 575</p>
    <p> <img src='https://www.themealdb.com/images/icons/image2.png' width="10px;" height="10px;"/>
       Images: 302</p>
      </div>
  </div>
</div><hr/>

<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Latest Meals</p>
    </div>

  </div>
</div>

<div class="container">
  <div class="row" id='wide'>

<div class="col-sm-3">

  <img src='https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg' width="100%;"/>
  <p>Lamb Pilaf (Plov)</p>

</div>

<div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg' width="100%;"/>
<p>Strawberries Romanoff</p>
</div>

<div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg'  width="100%;"/>
<p>Potato Salad (Olivier Salad)</p>
</div>

<div class="col-sm-3">
<Link to="/fetching">
<img src='https://www.themealdb.com/images/media/meals/0206h11699013358.jpg' width="100%;"/>
<p>Blini Pancakes</p></Link>

    </div>
    <div class="col-sm-3">
    <img src='https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg' width="100%;"/>
    <p>Fish Soup (Ukha)</p>
    </div>

    <div class="col-sm-3">
    <img src='https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg'width="100%;"/>
    <p>Beetroot Soup (Borscht)</p>
    </div>

    <div class="col-sm-3">
    
<img src='https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg'width="100%;"/>
 <p>Cabbage Soup (Shchi)
</p>
</div>

 <div class="col-sm-3">
 <img src='https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg'width="100%;"/>
 <p>Bread omelette</p>
  </div>
  
  
  
  </div></div><hr/>

  
<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Popular Ingredients</p>
    </div>

  </div>
</div>

<div class="container">
  <div class="row" id='widee'>

    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Chicken.png' width="100%;"/>
      <p>Chicken</p>
      </div>

      <div class="col-sm-3">
<img src='https://www.themealdb.com/images/ingredients/Salmon.png'width="100%;"/>
<p>Salmon</p>
</div>

<div class="col-sm-3">
 
 <img src='https://www.themealdb.com/images/ingredients/Beef.png'width="100%;"/>
 <p>Beef</p>
</div>

<div class="col-sm-3">
  <img src='https://www.themealdb.com/images/ingredients/Pork.png'width="100%;"/>
<p>Pork</p>
</div>

</div>
</div><hr/>


<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Random Meals</p>
    </div>

  </div>
</div>

<div class="container">
  <div class="row" id='wide'>

<div class="col-sm-3">

  <img src='https://www.themealdb.com/images/media/meals/1520083578.jpg' width="100%;"/>
  <p>Oxtail with broad beans</p>

</div>

<div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg'width="100%;"/>
<p>Mbuzi Choma (Roasted Goat)</p>
</div>

<div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg' width="100%;"/>
<p>Creamy Tomato Soup</p>
</div>

<div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg' width="100%;"/>
<p>Fennel Dauphinoise</p>

    </div>
    <div class="col-sm-3">
    <img src='https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg' width="100%;"/>
    <p>Pear Tarte Tatin</p>
    </div>

    <div class="col-sm-3">
    <img src='https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg'width="100%;"/>
    <p>Pumpkin Pie</p>
    </div>

    <div class="col-sm-3">
<img src='https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'width="100%;"/>
 <p>Spicy Arrabiata Penne</p>
</div>

 <div class="col-sm-3">
 <img src='https://www.themealdb.com/images/media/meals/cybyue1614349443.jpg'width="100%;"/>
 <p>Portuguese barbecued pork (Febras assadas)</p>
  </div>
  
  
  
  </div></div><hr/>



<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Random Ingredients</p>
    </div>

  </div>
</div>


<div class="container">
  <div class="row" id='widee'>

    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Toor%20Dal.png' width="300px;" height="300px;"/>
      <p>Toor Dal</p>
      </div>

      <div class="col-sm-3">
<img src='https://www.themealdb.com/images/ingredients/Muscovado%20Sugar.png'width="300px;" height="300px;"/>
<p>Muskovado Sugar</p>
</div>

<div class="col-sm-3">
 
 <img src='https://www.themealdb.com/images/ingredients/Scotch%20Bonnet.png' width="300px;" height="300px;"/>
 <p>Scotch Bonnet</p>
</div>

<div class="col-sm-3">
  <img src='https://www.themealdb.com/images/ingredients/Thai%20Red%20Curry%20Paste.png'width="300px;" height="300px;"/>
<p>Thai Red Curry Paste</p>
</div>

</div>
</div><hr/>

<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Browse Country</p>
    </div>

  </div>
</div>

<div class="container">
  <div class="row" id='no'>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/gb.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/us.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/fr.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ca.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/jm.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/jm.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/nl.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/eg.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/gr.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/in.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ie.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/it.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/jp.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/kn.png'/>
</div>

<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/my.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/mx.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ma.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/hr.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/no.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/pt.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ru.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ar.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/es.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/sk.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/th.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/sa.png'/>
</div>


<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/vn.png'/>
</div>



<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/tr.png'/>
</div>




<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/sy.png'/>
</div>




<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/dz.png'/>
</div>




<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/tn.png'/>
</div>




<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/pl.png'/>
</div>




<div class="col-sm-1">
<img src='https://www.themealdb.com/images/icons/flags/big/64/ph.png'/>
</div>


</div></div><br/>

<div class="container">
  <div class="row" id='center'>
    <div>
    <p>Browse By Names</p>
    <h4>A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z</h4>
    </div>

  </div>
</div><br/><br/></div>

  </>
  )
}

export default Home