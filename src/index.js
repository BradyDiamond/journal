import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';

$("#form").submit(function(event) {
  event.preventDefault();
  const title = $("title-input").val();
  const body = $("#body-input").val();
  const entry = new Entry(title, body);
  appendInfo(entry)
})

function appendInfo(entry) {
  const wordCount = entry.wordCount();
  const vowelCount = entry.vowelCount();
  const consonantCount = entry.consonantCount();
  const teaserSentence = entry.getTeaser();
  $("#output").append("<p> Word: " + wordCount + " Vowel: " + vowelCount + " Consonant: " + consonantCount + "</p>");
  $("#output").append("<p> Teaser: " + teaserSentence + "</p>")
}