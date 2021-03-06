$(document).ready(function(e){
  $('.index_search_bar').click(function() {   
      $('.search_row').toggle(); 
    });
  
  $('.date_picker_reverse').datetimepicker({
      timepicker:false,
      format:'d-m-Y',
      formatDate:'Y-m-d'
  });
  
  $('.datetime_picker_reverse').datetimepicker({
      timepicker:true,
      format:'d-m-Y H:i',
      formatDate:'Y-m-d H:i',
      defaultSeconds: 0
  });
  
  $('.year_picker_reverse').datetimepicker({
      format: "d-m-Y",
      formatDate: "Y-m-d",
      timepicker: false,
      autoclose: true,
      onSelectDate: function(dp, $input) {
        $input.val( '01-01-'+$input.val().substr(6,9));
      }
  });
  
  $("input[id='is_checked']").change(function() {  
    if($('#is_checked').is(':checked')) { 
      $("#span_displaylist").show("highlight"); 
    }else{
      $("#span_displaylist").hide(""); 
      $("#span_navy_apmm_rank").hide();
    }
  });
  $("input[id='is_checked']").each(function() {  
    if($('#is_checked').is(':checked')) { 
      $("#span_displaylist").show("highlight"); 
    }else{
      $("#span_displaylist").hide(""); 
      $("#span_navy_apmm_rank").hide();
    }
  });
  
});
