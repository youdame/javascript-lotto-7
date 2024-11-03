import { Console, Random } from '@woowacourse/mission-utils';
import Game from './game.js';
import InputPrompt from './input-prompt.js';
import PurchasedLottos from './purchased-lottos.js';
import WinningLotto from './winning-lotto.js';

class App {
  async run() {
    try {
      const purchaseAmount = await InputPrompt.getPurchaseAmount();
      const isValid = /^[0-9]+$/.test(purchaseAmount);
      if (!isValid) throw new Error('[ERROR]');

      const lottoCount = parseInt(purchaseAmount, 10) / 1000;
      Console.print(`\n`);
      Console.print(`${lottoCount}개를 구매했습니다.`);

      const purchasedLottos = new PurchasedLottos();
      await purchasedLottos.generateLottos(lottoCount);
      Console.print(`\n`);

      const winningNumberInput = await InputPrompt.getWinningNumber();
      Console.print(`\n`);
      const winningNumbers = winningNumberInput
        .trim()
        .split(',')
        .map((number) => parseInt(number, 10));

      const bonusNumberInput = await InputPrompt.getBonusNumber();
      Console.print(`\n`);
      const bonusNumber = parseInt(bonusNumberInput, 10);

      const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
      const game = new Game(purchasedLottos, winningLotto);
      game.play();
    } catch (error) {
      Console.print(error.message); // [ERROR] 출력
    }
  }
}
export default App;
