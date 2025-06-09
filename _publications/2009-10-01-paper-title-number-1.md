<p>
  <strong>{{ entry.title }}</strong>, {{ entry.authors }} ({{ entry.date | date: "%Y" }}), <em>{{ entry.venue }}</em>. 
  <a href="{{ entry.paperurl }}">PDF</a>
  {% if entry.arxivurl %}<a href="{{ entry.arxivurl }}">arXiv</a>{% endif %}
  {% if entry.doi %}<a href="{{ entry.doi }}">DOI</a>{% endif %}
</p>
