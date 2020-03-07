import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements'

const GreeterText = [
  'watch today?', 'do today?', 'stream today?', 'listen to today?', 'enjoy today?'
]

var randomNumber = Math.floor(Math.random() * (GreeterText.length))

export default function MovieScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>

        <LinearGradient colors={['#000000', '#000']} style={styles.linearGradient}></LinearGradient>

        <View style={styles.Greeter}>
          <Text style={styles.greeterText}>
            Hello, Fabian!
          </Text>
          <Text style={styles.underGreeter}>What would you like to</Text>
          <Text style={styles.underUnderGreeter}>{GreeterText[randomNumber]}</Text>
        </View>

        <View style={styles.movieScreen}>
          <SearchBar placeholder = 'Search movies/shows/music...'
          style = {
            styles.searchBar
          }
          platform = {
            'ios'
          }
          round = {
            true
          }
          containerStyle = {
            {
              backgroundColor: 'transparent',
              width: 290,
              borderWidth: 0,
              marginLeft: 20
            }
          }
          inputContainerStyle = {
            {
              borderRadius: 20
            }
          }
          cancelButtonTitle = {true}
          inputStyle = {
            {
              backgroundColor: 'lightgrey',
              fontSize: 14,
              paddingLeft: 5
            }
          }
          lightTheme = {
            true
          }
          clearIcon={true}
          />

        <View style={styles.Movies}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/364093/tvthumb/star-trek-picard-5e2bcbcd25756.jpg'}} style={styles.movieImages}/>
          <Image source={{ uri: 'https://fanart.tv/detailpreview/fanart/tv/295760/tvthumb/dcs-legends-of-tomorrow-58a073b3c0df8.jpg'}} style={styles.movieImages}/>
          <Image source={{ uri: 'https://fanart.tv/detailpreview/fanart/tv/372081/tvthumb/hunters-5e14697b2dd38.jpg' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://fanart.tv/detailpreview/fanart/tv/277366/tvthumb/jim-hensons-creature-shop-challenge-5e5a2f5bafe28.jpg' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://fanart.tv/detailpreview/fanart/tv/332331/tvthumb/altered-carbon-5a7446a30d1e7.jpg' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://fanart.tv/detailpreview/fanart/tv/354265/tvthumb/deputy-5e4ea71403932.jpg' }} style={styles.movieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.movieImages} />

        </ScrollView>
      </View>

       <View style={styles.nowPlayingMovies}>
        <Text style={styles.popularText}>Popular Movies</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.nowPlayingMovieImages} />

        </ScrollView>
      </View>
      {/* scrolling liked Albums */}
      <View style={styles.Albums}>
        <Text style={styles.likedSeriesText}>Latest Albums</Text>
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

       {/* scrolling liked tv shows */}
      <View style={styles.Series}>
        <Text style={styles.likedSeriesText}>Trending Artists</Text>
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

      <View style={styles.nowPlayingMovies}>
        <Text style={styles.popularText}>Popular Tv Shows</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.nowPlayingMovieImages} />
          <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.nowPlayingMovieImages} />

        </ScrollView>
      </View>

      </View>
      </ScrollView>
    </View>
  );
}

MovieScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  Series: {
    marginLeft: 5,
  },
  Trailers: {
    marginLeft: 5
  },
  trailerImages: {
    paddingLeft: 5,
    marginRight: 7,
    height: 100,
    width: 100,
    borderRadius: 20
  },
  artistImages: {
      width: 90,
      height: 90,
      marginRight: 7,
      borderRadius: 50
    },
    Albums: {
      marginLeft: 3,
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
  popularText: {
    padding: 5,
    fontWeight: "bold"
  },
  Movies: {
    paddingLeft: 5,
  },
  nowPlayingMovieImages: {
    width: 80,
    height: 120,
    marginRight: 7,
    borderRadius: 10
  },
  nowPlayingMovies: {
    paddingLeft: 5,
    paddingTop: 10,
  },
  movieImages: {
      width: 210,
      height: 100,
      marginRight: 7,
      borderRadius: 10
    },
  movieScreen: {
    backgroundColor: 'white',
    position: "relative",
    top: -114,
    marginBottom: -114,
    borderTopLeftRadius: 30,
  },
  container: {
    flex: 1,
  },
  linearGradient: {
    width: 400,
    height: 200,
  },
  Greeter: {
    position: 'relative',
    top: -130,
    paddingLeft: 20
  },
  greeterText: {
    color: 'lightgrey',
    opacity: 0.5
  },
  underGreeter: {
    color: 'white',
    fontSize: 25
  },
  underUnderGreeter: {
    color: 'white',
    fontSize: 25
  }
});
