function loadMap() {
  var navigationBarMode = Microsoft.Maps.NavigationBarMode;
  var map = new Microsoft.Maps.Map(document.getElementById('mapbox'), {
      /* No need to set credentials if already passed in URL */
      navigationBarMode: navigationBarMode.compact,
      supportedMapTypes: [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.aerial, Microsoft.Maps.MapTypeId.grayscale, Microsoft.Maps.MapTypeId.canvasLight] });

}
