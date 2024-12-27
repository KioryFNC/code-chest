1. Operadores de Comparação
Esses operadores são usados para comparar valores.

Operador	  Descrição	                              Exemplo	    Resultado

==	        Igualdade (não estrita)	                '5' == 5	  true
===	        Igualdade estrita (tipo e valor)	      '5' === 5	  false
!=	        Diferença (não estrita)	                '5' != 5	  false
!==	        Diferença estrita (tipo ou valor)	      '5' !== 5	  true
<	          Menor que	                               3 < 5	    true
>	          Maior que	                               3 > 5	    false
<=	        Menor ou igual	                         5 <= 5	    true
>=	        Maior ou igual	                         5 >= 3	    true



2. Operadores Lógicos
Usados para combinar condições.

Operador	Descrição	          Exemplo	                   Resultado

&&	      E lógico (AND)	    true && false	             false
`		                          `	                         OU lógico (OR)
!	        NÃO lógico (NOT)	  !true	                     false


&& (AND): Retorna true se todas as condições forem verdadeiras.
Exemplo:
(5 > 3) && (10 > 7); // true
(5 > 3) && (10 < 7); // false


|| (OR): Retorna true se qualquer condição for verdadeira.
Exemplo:
(5 > 3) || (10 < 7); // true
(5 < 3) || (10 < 7); // false


! (NOT): Inverte o valor lógico.
Exemplo:
!(5 > 3); // false (5 > 3 é true, mas o `!` inverte)


3. Operadores Aritméticos
Usados para operações matemáticas.

Operador	        Descrição	                Exemplo	      Resultado

+	                Adição	                  5 + 3	            8
-	                Subtração	                5 - 3	            2 
*	                Multiplicação	            5 * 3	            15
/	                Divisão	                  6 / 3	            2
%	                Resto da divisão (módulo)	5 % 2	            1
++	              Incremento	              let x = 5; x++	  6
--	              Decremento	              let x = 5; x--	  4


4. Operadores de Atribuição
Usados para atribuir valores às variáveis.

Operador	        Descrição	                    Exemplo	          Resultado

=	                Atribuição	                  x = 5	            x = 5
+=	              Adição e atribuição	          x += 3	          x = x + 3
-=	              Subtração e atribuição	      x -= 2	          x = x - 2
*=	              Multiplicação e atribuição	  x *= 4	          x = x * 4
/=	              Divisão e atribuição	        x /= 2	          x = x / 2
%=	              Módulo e atribuição	          x %= 2	          x = x % 2



5. Operadores Ternários
Um operador especial para condições simples.

Operador	    Descrição	                            Exemplo	                      Resultado

? :	          Ternário (condição simplificada)	    x > 5 ? 'sim' : 'não'	        'sim' ou 'não'

Exemplo:
let x = 10;
let resultado = x > 5 ? 'maior que 5' : 'menor ou igual a 5';
console.log(resultado); // "maior que 5"
