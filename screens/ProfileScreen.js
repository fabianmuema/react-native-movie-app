import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Fabian from '../assets/images/download.png';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View>
        <LinearGradient
          colors={['#2193b0', '#6dd5ed']}
          style={styles.linearGradient}>
        </LinearGradient>
      </View>

      <View style={styles.underProfile}>
           <Text style={styles.profileText}>
            Fabian Muema
          </Text>
          <Text style={styles.aboutText}>
            Balance: kshs 45
          </Text>
      </View>

      <Image source={Fabian} style={styles.profilePic} />

      {/* scrolling liked movies */}
      <View style={styles.Movies}>
        <Text style={styles.likedMoviesText}>Liked Movies</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.movieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.movieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.movieImages} />

        </ScrollView>
      </View>

      {/* scrolling liked tv shows */}
      <View style={styles.Series}>
        <Text style={styles.likedSeriesText}>Liked Shows</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/122/265/posters/thumb/3b3079549a.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/056/872/posters/thumb/edf2d6c53d.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/001/425/posters/thumb/d6c13f48cb.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/048/587/posters/thumb/47f16810be.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/147/922/posters/thumb/d31e283740.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/060/300/posters/thumb/79bd96a4d3.jpg.webp' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/shows/000/001/390/posters/thumb/93df9cd612.jpg.webp' }} style={styles.movieImages} />

        </ScrollView>
      </View>

      {/* scrolling liked tv shows */}
      <View style={styles.Series}>
        <Text style={styles.likedSeriesText}>Favourite Artists</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2007/12/maroon-5-9st.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2010/12/nicki-minaj-thi.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2005/12/eminem-1xq.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2012/11/kendrick-lamar-h1y.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2006/12/beyonce-000-artist-chart-cci.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2007/12/luke-bryan-kl4.jpg?1' }} style={styles.artistImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2006/12/chris-brown-cte.jpg?1' }} style={styles.artistImages} />

        </ScrollView>
      </View>

      {/* scrolling liked Albums */}
      <View style={styles.Albums}>
        <Text style={styles.likedSeriesText}>Liked Albums</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
          <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />

        </ScrollView>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  artistImages: {
    width: 90,
    height: 90,
    marginRight: 7,
    borderRadius: 50
  },
  Albums: {
    marginLeft: 3,
    marginBottom: 20
  },
  albumImages: {
    width: 140,
    height: 130,
    marginRight: 7,
    borderRadius: 2
  },
  likedSeriesText: {
    padding: 5,
    fontWeight: 'bold',
  },
  Series: {
    marginLeft: 3,
  },
  movieImages: {
    width: 100,
    height: 150,
    marginRight: 7,
    borderRadius: 10
  },
  likedMoviesText: {
    fontWeight: 'bold',
    paddingBottom: 10
  },
  profilePic: {
    position: 'absolute',
    zIndex: 3,
    width: 70,
    height: 70,
    top: 80,
    left: 125,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 5
  },
  linearGradient: {
    width: 400,
    height: 150,
  },
  underProfile: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 285,
    height: 70,
    top: 110,
    left: 20,
    borderRadius: 10,
    height: 120,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 5

  },
  Movies: {
    position: 'relative',
    marginTop: 95,
    zIndex: 4,
    marginLeft: 3,
  },
  Flex: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
  },
  aboutText: {
    textAlign: 'center',
    fontWeight: '100',
    color: 'grey',
    paddingTop: 5,
  },
  profileText: {
    marginTop: 50,
    textAlign: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  textAlign: {
    textAlign: 'center',
    color: 'grey',
    paddingRight: 10
  },
  contentContainer: {
    paddingTop: 0,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  profileTop: {
    height: 100,
    backgroundColor: '#2193b0',
  }
});
