function chanceC1C2A3() {
      const c1 = Number(document.getElementById('c1').value);
      const c2 = Number(document.getElementById('c2').value);
      const a3 = Number(document.getElementById('a3').value);
      const pedaco = a3 / (c1 + c2);

      if (document.getElementById('flexCheckDefault').checked) {
        const arredondar = Number(document.getElementById('arredondar').value);
        const valorA1 = pedaco * c2;
        const restoA1 = valorA1 % arredondar;
        const valorA1Arredondado = restoA1 >= arredondar ? valorA1 - restoA1 : valorA1 + arredondar - restoA1;
        document.getElementById('a1').value = valorA1Arredondado.toFixed(2);

        const valorA2 = pedaco * c1;
        const restoA2 = valorA2 % arredondar;
        const valorA2Arredondado = restoA2 >= arredondar ? valorA2 - restoA2 : valorA2 + arredondar - restoA2;
        document.getElementById('a2').value = valorA2Arredondado.toFixed(2);
      } else {
        document.getElementById('a1').value = (pedaco * c2).toFixed(2);
        document.getElementById('a2').value = (pedaco * c1).toFixed(2);
      }
      const a1 = Number(document.getElementById('a1').value);
      const a2 = Number(document.getElementById('a2').value);
      document.getElementById('l1').innerText = ((c1 * a1) - a3).toFixed(2)
      document.getElementById('l2').innerText = ((c2 * a2) - a3).toFixed(2)
      if ((c1 * a1) - a3 < 0) {
        document.getElementById('l1').style.color = 'red'
      } else {
        document.getElementById('l1').style.color = 'black'
      }
      document.getElementById('l2').innerText = ((c2 * a2) - a3).toFixed(2)
      if ((c2 * a2) - a3 < 0) {
        document.getElementById('l2').style.color = 'red'
      } else {
        document.getElementById('l2').style.color = 'black'
      }
    }
    function chanceA1A2() {
        const a1 = Number(document.getElementById('a1').value);
        const a2 = Number(document.getElementById('a2').value);
        document.getElementById('a3').value = (a1 + a2).toFixed(2);
        const a3 = Number(document.getElementById('a3').value);
        const c1 = Number(document.getElementById('c1').value);
        const c2 = Number(document.getElementById('c2').value);
        document.getElementById('l1').innerText = ((c1 * a1) - a3).toFixed(2)
        if ((c1 * a1) - a3 < 0) {
          document.getElementById('l1').style.color = 'red'
        } else {
          document.getElementById('l1').style.color = 'black'
        }
        document.getElementById('l2').innerText = ((c2 * a2) - a3).toFixed(2)
        if ((c2 * a2) - a3 < 0) {
          document.getElementById('l2').style.color = 'red'
        } else {
          document.getElementById('l2').style.color = 'black'
        }
      }
    // document.getElementById('c1').addEventListener('change', chanceC1C2A3)
    // document.getElementById('c2').addEventListener('change', chanceC1C2A3)
    // document.getElementById('a3').addEventListener('change', chanceC1C2A3)
    // document.getElementById('a1').addEventListener('change', chanceA1A2)
    // document.getElementById('a2').addEventListener('change', chanceA1A2)
    document.querySelector('input[id="c1"]').addEventListener('change', chanceC1C2A3);
    document.querySelector('input[id="c2"]').addEventListener('change', chanceC1C2A3);
    document.querySelector('input[id="a1"]').addEventListener('change', chanceA1A2);
    document.querySelector('input[id="a2"]').addEventListener('change', chanceA1A2);
    document.querySelector('input[id="a3"]').addEventListener('change', chanceC1C2A3);
