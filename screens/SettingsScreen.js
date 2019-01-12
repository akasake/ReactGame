import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rules',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Elke speler zet hetzelfde aantal krijtstreepjes op zijn kant van de pietjesbak. Naargelang het gezelschap en de traditie, doorgaans negen. Iedereen gooit één dobbelsteen om te bepalen wie er begint. Bij een ex aequo wordt er nogmaals gegooid.
        </Text>
        <Text>
        De eerste speler gooit drie dobbelstenen. Na de eerste worp mag hij stoppen. Dit heet "stoefen". De eerste speler mag vervolgens verder spelen met ofwel alle drie de stenen ofwel met één of twee van de stenen, waarbij hij de stenen die hij tactisch acht om een hogere score te halen op de rand van de pietjesbak mag leggen, aan de zijde waar hij speelt. De waarde van zijn laatste worp geldt. De andere spelers hebben slechts hetzelfde aantal pogingen als dat de beginner gooide. Dus de andere spelers hebben maximaal drie pogingen. Wie de hoogste worp gegooid heeft mag één, twee of drie streepjes uitwissen (afhankelijk van wat hij/zij gooit).
        </Text>
        <Text>
        Dit is de waarde van één dobbelsteen:
        </Text>
        <Text>
        1 oog = 100 punten
        6 ogen = 60 punten
        5, 4, 3, 2 ogen = 5, 4, 3, 2 punten
        </Text>
        <Text>

        Dit is de totale waarde van de drie dobbelstenen, gerangschikt van hoog naar laag:
        </Text>
        <Text>

        Drie apen, azen: 1, 1, 1.
        soixante-neuf: 6, 5, 4.
        Zand: driemaal dezelfde waarde. 5,5,5 is beter dan 4, 4, 4 enz.
        Andere: som van de drie dobbelstenen, vb. 1, 4, 3 is 107. Hoe hoger de som, hoe beter.
        Zeven: 2, 2, 3. Dit is de laagst mogelijke worp.
        </Text>
        <Text>

        De hoogste worp wint. Na een ex aequo wordt er nogmaals gegooid met één dobbelsteen - zes is dan het hoogste. De winnaar mag een streepje uitwissen. Als hij zand gegooid heeft, mag hij twee streepjes uitwissen; na een soixante-neuf drie. Als iemand met "stoef" wint mag hij twee streepjes wegvegen. Als iemand drie apen gooit, wint hij het spel op slag, dit op voorwaarde dat hij daarvoor al minstens één streepje uitgewist had. Zo niet is hij direct uitgeschakeld in het spel. Bij een zeven moeten alle spelers een streepje bijschrijven.

        </Text>
        <Text>
        Wie als eerste al zijn streepjes uitgewist heeft, wint het spel.</Text>



      </ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
