import $ from 'jquery'
import './css/index.css'

$(function(){
    $("li:odd").css("background-color","red");
    $("li:even").css("background-color","green");
})