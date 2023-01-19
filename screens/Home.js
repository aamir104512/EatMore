import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: 1,
    title: 'Burgers',
    image: require('../assets/burger.png'),
  },
  {
    id: 2,
    title: 'Pizza',
    image: require('../assets/pizza.png'),
  },
  {
    id: 3,
    title: 'Chicken',
    image: require('../assets/chicken.png'),
  },
];

const BurgersData = [
  {
    id: 1,
    title: 'Zinger Burger',
    image: require('../assets/burger2.png'),
    star: require('../assets/stars.png'),
    price: '$12',
  },
  {
    id: 2,
    title: 'Chicken Burger',
    image: require('../assets/burger1.png'),
    star: require('../assets/stars.png'),
    price: '$15',
  },
  {
    id: 3,
    title: 'Vegetable Burger',
    image: require('../assets/burger3.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 4,
    title: 'Egg Burger',
    image: require('../assets/burger4.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 5,
    title: 'Vegetable Burger',
    image: require('../assets/hamburger.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
];

const PizzasData = [
  {
    id: 1,
    title: 'Cheese Pizza',
    image: require('../assets/pizza3.png'),
    star: require('../assets/stars.png'),
    price: '$12',
  },
  {
    id: 2,
    title: 'Veggie Pizza',
    image: require('../assets/pizza1.png'),
    star: require('../assets/stars.png'),
    price: '$15',
  },
  {
    id: 3,
    title: 'Pepperoni Pizza',
    image: require('../assets/pizza2.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 4,
    title: 'Margherita Pizza',
    image: require('../assets/pizza4.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 5,
    title: 'Meat Pizza',
    image: require('../assets/pizza5.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
];

const ChickenData = [
  {
    id: 1,
    title: 'Chicken Korma',
    image: require('../assets/chicken1.png'),
    star: require('../assets/stars.png'),
    price: '$12',
  },
  {
    id: 2,
    title: 'Butter Chicken',
    image: require('../assets/chicken2.png'),
    star: require('../assets/stars.png'),
    price: '$15',
  },
  {
    id: 3,
    title: 'Mughlai Chicken',
    image: require('../assets/chicken3.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 4,
    title: 'Tikka Masala',
    image: require('../assets/chicken4.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
  {
    id: 5,
    title: 'Dry Roasted',
    image: require('../assets/chicken5.png'),
    star: require('../assets/stars.png'),
    price: '$20',
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [foodCategory, setFoodCategory] = useState(1);

  function selectedOption(category) {
    setSelectedCategory(category);
  }

  function selectedBurgerOption(category) {
    setSelectedBurger(category);
    console.log(category.title)
  }

  const FoodFun = item => {
    selectedOption(item);
    // console.log(item.id)
    setFoodCategory(item.id);
  };

  const renderBurgers = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: 173,
          height: 211,
          borderRadius: 34,
          elevation: 10,
          marginHorizontal: 10,
          shadowColor: selectedBurger?.id == item.id ? '#FF0036' : '#A8A7A7',
        }}
        onPress={() => selectedBurgerOption(item)}>
        <LinearGradient
          colors={
            selectedBurger?.id == item.id
              ? ['#FF0036', '#FF6787']
              : ['white', 'white']
          }
          useAngle={true}
          locations={[0, 1]}
          angle={180}
          style={{
            flex: 1,
            borderRadius: 34,
            justifyContent: 'center',
          }}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{
                width: 136,
                height: 94,
              }}
            />
          </View>

          <Text
            style={{
              color: selectedBurger?.id == item.id ? 'white' : 'black',
              fontSize: 16,
              paddingLeft: 15,
              marginTop: 10,
            }}>
            {item.title}
          </Text>

          <View style={{paddingLeft: 15}}>
            <Image
              source={item.star}
              resizeMode="contain"
              style={{
                width: 44,
                height: 13,
                marginTop: 3,
              }}
            />
          </View>

          <Text
            style={{
              color: selectedBurger?.id == item.id ? 'white' : 'black',
              fontSize: 24,
              paddingLeft: 15,
              marginTop: 7,
            }}>
            {item.price}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: 110,
          height: 69,
          borderRadius: 25,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 5,
          borderWidth: 1,
          borderColor: selectedCategory?.id == item.id ? '#FF0036' : 'white',
          shadowColor: selectedCategory?.id == item.id ? '#FF0036' : '#A8A7A7',
          elevation: 5,
        }}
        onPress={() => FoodFun(item)}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{
            width: 26,
            height: 20,
            tintColor: selectedCategory?.id == item.id ? '#FF0036' : '#A8A7A7',
          }}
        />
        <Text
          style={{
            color: selectedCategory?.id == item.id ? '#FF0036' : '#A8A7A7',
            fontSize: 15,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: '#F7F6FF', flex: 1, paddingHorizontal: 20}}>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/menu.png')}
            resizeMode="contain"
            style={{height: 10, width: 26, tintColor: 'black'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Image
            source={require('../assets/user.png')}
            resizeMode="contain"
            style={{height: 36, width: 36, borderRadius: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 20, color: 'black'}}>Choose the</Text>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Food you love
        </Text>
      </View>

      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Search for a food item"
          placeholderTextColor={'#A8A7A7'}
          style={{
            height: 44,
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 22,
            paddingLeft: 20,
            color: 'black',
          }}
        />
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 18, color: 'black'}}>Categories</Text>

        <View style={{marginTop: 15, height: 80}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {foodCategory == 1 && (
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>Burgers</Text>
          <View>
            <View style={{marginTop: 15, height: 230}}>
              <FlatList
                data={BurgersData}
                renderItem={renderBurgers}
                horizontal
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      )}

      {foodCategory == 2 && (
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>Pizzas</Text>
          <View>
            <View style={{marginTop: 15, height: 230}}>
              <FlatList
                data={PizzasData}
                renderItem={renderBurgers}
                horizontal
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      )}

      {foodCategory == 3 && (
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, color: 'black'}}>Chicken</Text>
          <View>
            <View style={{marginTop: 15, height: 230}}>
              <FlatList
                data={ChickenData}
                renderItem={renderBurgers}
                horizontal
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity style={{height: 60, width: 60, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 30,
    position: 'absolute', bottom: 15, right: 15, shadowColor: '#FF0036', elevation: 10}}
    onPress = {()=> console.log("Cart Pressed")}>
        <View style={{height: 50, width: 50, backgroundColor: '#FF0036', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image 
          source={require("../assets/cart.png")}
          resizeMode = "contain"
          style = {{
            width: 22, height: 28, tintColor: 'white'
          }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
