
//Pure method JS. La idea es poder probar los metodos puros de JS sin "enzyme" 
// ya que de esta manera no hay que instanciar al componente
import { getWidthAsPercentOfTotalWidth } from './percentUtils';

describe('percentUtils', () => {

  test('getWidthAsPercentOfTotalWidth should return 250 with Total of 500 and percent of 50%', () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});
