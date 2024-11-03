import { Console } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input-prompt.js';
import PurchasedLottos from './purchased-lottos.js';
import WinningLotto from './winning-lotto.js';

class App {
  async run() {
    const purchaseAmount = await InputPrompt.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    Console.print('\n');
    Console.print(`${lottoCount}개를 구매했습니다.`);

    const purchasedLottos = new PurchasedLottos(lottoCount);
    await purchasedLottos.generateLottos();

    Console.print('\n');
    const winningNumberInput = await InputPrompt.getWinningNumber();
    const winningNumbers = winningNumberInput.split(',').map((number) => parseInt(number, 10));

    Console.print('\n');
    const bonusNumberInput = await InputPrompt.getBonusNumber();
    const bonusNumber = parseInt(bonusNumberInput, 10);

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    const game = new Game(purchasedLottos, winningLotto);
    game.play();
  }
}
export default App;
