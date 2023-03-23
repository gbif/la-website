---
layout: default
title: Participants
permalink: /participants/
---
{% assign psDeprec = site.participants | sort: 'institution' %}
{% assign ps3 = site.data.ala-summary-gdocs-sheet1 | where_exp: "item", "item.LA_web_status == 'highlight' or item.LA_web_status == 'list'" | sort: 'Installation' %}
{% assign psd = site.data.ala-summary-gdocs-sheet1 | sort: 'Installation' %}

### Participants with live data portals

<div class="table-responsive">
    <table class="table table-bordered table-hover"> 
        <thead class="thead-light">
            <tr>
                <th> Institution </th>
                <th> Area </th>
                <th> Language </th>
                <th> Contact </th>
                <th> Year </th>
				<th> Status </th>
            </tr>
        </thead>
        <tbody>
            {% for participant in ps3 %}
			{% assign statusIcon = site.data.participant_development | where: "LA_web_status", "highlight" | sort: "institution" %}
            <tr> 
                <td scope="row" >
                    <a href="{{ site.baseurl }}/participants/{{ participant.Web_page }}">
                        {{ participant.Installation }}
                    </a>
                </td>
                <td> 
                    {{ participant.Area }}
                </td>
                <td>
                    {{ participant.Language }}
                </td>
                <td class="column-centered">
					{% if participant.Support %}
                    <a href="mailto:{{ participant.Support | encode_email }}" title="Contact {{ participant.Installation }}"><i class="mdi mdi-email-outline participant-email-icon" aria-hidden="true"></i></a>
                    {% endif %}
                </td>
                <td class="column-centered">
                    {{ participant.Year }}
                </td>
				<td title="{{ participant.Status_abrev | capitalize | replace: "-", " " }}" class="column-centered">
                    <i class="mdi mdi-circle participant-status participant-status-{{ participant.Status_abrev }}" aria-hidden="true"></i>
				</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>

### Other participants and status of their data portals

<div class="table-responsive">
    <table class="table table-bordered table-hover">
        <thead class="thead-light">
            <tr>
                <th> Institution </th>
                <th> Area </th>
                <th> Language </th>
                <th> Status </th>
            </tr>
        </thead>
        <tbody>
            {% for participant in psd %}
            {% if participant["LA_web_status"] != 'highlight' and participant["LA_web_status"] != 'list' and participant["LA_web_status"] != 'no-list' %}
            <tr> 
                <td scope="row" >
                 {% if participant.Web_page %}                
                    <a href="{{ site.baseurl }}/participants/{{ participant.Web_page }}">
                        {{ participant.Installation }}
                    </a>
                {% else %}
                    {{ participant.Installation }}
                {% endif %}
                </td>
                <td> 
                    {{ participant.Area }}
                </td>
                <td>
                    {{ participant.Language }}
                </td>
                <td>
                    {{ participant["Declared status"] }}
                </td>
            </tr>
            {% endif %} 
            {% endfor %}
        </tbody>
    </table>
</div>

### The community in action

<section>
{%- include carousel-people.html -%}
</section>
