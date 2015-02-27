<h1> Making Sense of Angular </h1>

<p> I'd like to start this with a disclaimer.  I have a very disogranized and chaotic approach to most things, so this post will probably not follow a set path, but rather just be a semi-coherent explanation of mine and Luke's thought process while developing Minesweeper.  The purpose of this post is to hopefully provide some understanding that I have gotten about Angular and hopefully help somebody a little bit.
</p>

<p>First, just some random interesting(at least to me) things me and my partner's his week have discovered about Angular. Unlike other MVC frameoworks, it doesn't tell you how to build your app, or expect you to follow conventions.  You, instead, are expected to do a little bit more legwork, researching what services and ui extensions you want to include in your app, wheras something like rails gives you all of the resources and rewards you with a vast amount of power if you follow the "rails way."</p>

<h3> Angular directives </h3>

<p> Angular directives are exciting and powerful things.  They remind me of Embedded Ruby.  It is almost like embedded jQuery.  My partners and I explored the limits of directives this week, and we had a lot of fun doing it.  In the process we discovered a lot of tricks that make using directives more fun.</p>

<h6> Toggles </h6>

<p>Using ng-click and ng-show to toggle something on and off is a really nice way to add quick, high powered functionality to your app. All you need to do is have a boolean resave itself as the opposite of what it is when you click the function.  For our restaurant finder app, we were able to use this toggle to also perform other functionality </p>

<script src="https://gist.github.com/JakeKaad/bf08319b32d0d7db669b.js"></script>


<p> Here, we had our ng click serve two purposes.  It turned the price variable from true to false.  The div will hidden when price returns true.  This probably would have been better if we wrote it as ng-show="price".  Also, we passed  used this toggle to  pass a boolean to our ClearPriceForm function.  This way, when we hide our checkbox in our search form, the value is reset to null.  We used this same kind of method on each of our search queries, so users would be able to have a customizable search engine.</p>

<h6> Tabs & ng-class </h6>

Ng-class, I think, might be the most important ng-directive I learned this week beyond ng-show/hide.  This allows you to dynamically add css classes to your HTML elements based on an expression.  

Here is the first time I really got to use this this week ( Thanks to Tina for making sense of this for me ).  


<script src="https://gist.github.com/JakeKaad/8559da43f9415bbfd791.js"></script>


<p> Here we are using a bootstrap navbar.  These are pretty cool.  You can assign them a link, and then you just have to figure out some way to dynamically add the bootstrap class 'active' to it to display to the user what tab they are currently looking at.  Luckily, angular makse this very easy!</p>

<p> Here, when the user clicks the nav item, they are setting a variable Active to 'new'.  </p>

<p>The directive ng-class takes an object as an argument.  The keys in this object are the name of the class, and the values are a boolean expression.  When it is true, the object has this class, and when it is false it doesn't.  Simple enough right? </p>


<script src="https://gist.github.com/JakeKaad/8e586ae6d89f9ee63f98.js"></script>


<p>Wow, there is a lot going on here.  WHat I want to draw attention to is the ng-class in the li div element.  Here we have an object with 2 key/value pairs.  Each of these will evaluate independently of each other.  Also, we were very pleasantly suprised that you could also delimite your boolean expression with &&, and I am assuming || as well although that is unconfirmed.  </p>

<h6> Creating Variables in ng-repeat </h6>

<p> Multiple times this week, I have wanted to use a property from an object as a variable for an argument in ng-repeat.  Multiple times I couldn't figure out how to do it. See in the above line of code, we are able to provide an argument. Hear it is again: </p>


<script src="https://gist.github.com/JakeKaad/52bfe1809a8e753b68b6.js"></script>


<p> Now, if you look closely.  This is actually a cell.id (or in our ng-repeats case, an item.id).  We tried: </p>

<script src="https://gist.github.com/JakeKaad/8d8b8ee23f926611ae9c.js"></script>


<p> Luke and I almost gave up here.  It was very frustrating, I remember pounding my head against the desk a little bit in frustration. But, we perservered and went back to the Angular API.  We found the directive ng-init.  It was designed specifically for this purpose.  You put it in the same line as your ng-repeaat, and you can assign a variable from the items you are reapeating.  So we were able to call our factory method using this argument.  </p>
