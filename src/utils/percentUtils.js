
//Pure method JS. La idea es poder probar los metodos puros de JS sin "enzyme" 
// ya que de esta manera no hay que instanciar al componente
export function getWidthAsPercentOfTotalWidth(width, percent) {
  return parseInt(width * (percent / 100), 10);
}
