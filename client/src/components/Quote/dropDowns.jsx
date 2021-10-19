import $ from 'jquery';
import React from "react";
import $
import "./style.css";
const { JSDOM } = require( "jsdom" );

function DropDown() {
    var carquery = new CarQuery();
    carquery.init();
    carquery.setFilters( {sold_in_us:true} );
    carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');
    // $('#cq-show-data').click(  function(){ carquery.populateCarData('car-model-data'); } );
    carquery.initMakeModelTrimList('make-list', 'model-list', 'trim-list', 'trim-data-list');
    carquery.year_select_min=1941;
    carquery.year_select_max=2023;
    var searchArgs =
           ({
               body_id:                       "cq-body"
              ,default_search_text:           "Keyword Search"
              ,doors_id:                      "cq-doors"
              ,drive_id:                      "cq-drive"
              ,engine_position_id:            "cq-engine-position"
              ,engine_type_id:                "cq-engine-type"
              ,fuel_type_id:                  "cq-fuel-type"
              ,min_cylinders_id:              "cq-min-cylinders"
              ,min_mpg_hwy_id:                "cq-min-mpg-hwy"
              ,min_power_id:                  "cq-min-power"
              ,min_top_speed_id:              "cq-min-top-speed"
              ,min_torque_id:                 "cq-min-torque"
              ,min_weight_id:                 "cq-min-weight"
              ,min_year_id:                   "cq-min-year"
              ,max_cylinders_id:              "cq-max-cylinders"
              ,max_mpg_hwy_id:                "cq-max-mpg-hwy"
              ,max_power_id:                  "cq-max-power"
              ,max_top_speed_id:              "cq-max-top-speed"
              ,max_weight_id:                 "cq-max-weight"
              ,max_year_id:                   "cq-max-year"
              ,search_controls_id:            "cq-search-controls"
              ,search_input_id:               "cq-search-input"
              ,search_results_id:             "cq-search-results"
              ,search_result_id:              "cq-search-result"
              ,seats_id:                      "cq-seats"
              ,sold_in_us_id:                 "cq-sold-in-us"
           }); 
           carquery.initSearchInterface(searchArgs);
      
           //If creating a search interface, set onclick event for the search button.  Make sure the ID used matches your search button ID.
        //    $('#cq-search-btn').click( function(){ carquery.search(); } );

    return(
        <div>
        <select name="car-years" id="car-years"></select>  
        <select name="car-makes" id="car-makes"></select> 
        <select name="car-models" id="car-models"></select>
        <select name="car-model-trims" id="car-model-trims"></select> 
        </div>
    )
}

export default DropDown;