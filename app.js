
mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbC1icmFkeSIsImEiOiJjazZ0eXpjbmswM295M25wYTZvZTk2cTQxIn0.JCkxaVnjRNg-SxCvzX-Ykg';

// Add the map to the page
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-77.0369, 38.9072],
    zoom: 12,
    scrollZoom: true
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

var monuments = {
    "type": "FeatureCollection",
        "features": [
        {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0343,
                38.8939
              ]
            },
            "properties": {
              "name": "Boy Scout Memorial",
              "image": "./monument_data/boyScoutMemorial/image1.png",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "You can learn at least as much from the worst of Washington’s monuments as you can from its best.  Here exemplifying the nadir of monumentality in Washington is the odd, unsettling Boy Scout Memorial.  At its center is a bronze sculptural group mounted high on a stone pedestal.  The sculpture faces an oval pool lined with an inscription explaining its creation.  The inscription doesn’t say much of substance beside that the memorial was created on the 50thanniversary of scouting in the US.  But while the inscription specifies that it is a “memorial”, it does not make clear what is being memorialized.  Is it dedicated to dead boy scouts?  This is surely not a memorial at all, but a monument: an object embodying an ideal of both past and future relevance.  This is not just a quibble.  It intimates real confusion at just what is being represented, and how.  Further scrutiny only heightens the incoherence of this monument.<br />"+
              "<br />At the front of the sculptural group is a young scout, perhaps a ‘tween or early teen, carrying a walking stick and striding to the edge of the platform.  His uniform and boots are precisely detailed.  The insignia on his left shoulder, which normally gives a troop’s number and home location, states that this scout’s troop is (wittily) located in “Everywhere, USA.”  Slightly behind him are two adult-sized figures, conceived in idealized Greco-Roman/Caucasian type.  The man is almost completely nude, his buff, muscled body dramatically articulated with just a slight textile hiding between his legs.  The woman wears a diaphanous gown.  They are clearly a unit.  All three are marching together, left leg forward.  All three carry something in their left hand.  From the woman’s outstretched hand emerges what seems like a gold stalagmite, its bright polished bronze surface a contrast to the dark, burnished bronze of the rest of the statue.  The man nestles in his left arm what appears to be an antique helmet, together with a clear cut tree branch which, with an acorn attached to it, is identifiable as an oak.  But if it is hard to discern these details, it is even harder to figure out what they mean.<br />"+
              "<br />The website of the National Park Service, which owns and maintains the monument, tells us the man “carries a helmet, a symbol of masculine attire and a live oak branch, a symbol of peace and of strength.”  This is bewildering to an art historian.  The oak is most famous culturally as a tree sacred to the ancient Druids, and later appropriated by Christians.  It was also a national symbol for the German nation in the age of Romanticism, as well as number of other particular things.  The acorn is best known for its use as a symbol for several Renaissance popes.  Better to have told us something obvious and far less profound-sounding, like that the little acorn will someday grow into a big, strong tree.  It’s an even bigger strikeout on helmets, since in the classical antiquity the sculptures aspire to, the prominent goddess Athena is quite often seen in a helmet, and even full armor.<br />"+
              "<br />The rest of the National Park Service explanation of the sculptural group derives from the inscription on the pavement next to it.  I will quote it in full:<br />"+
              '<br />“The two symbolical [sic] figures represent the sum of the great ideas of past civilizations developed through the centuries and now at best as delivered by American manhood and womanhood to the present generation.<br />'+
              "<br />The Boy Scout, aware of his fellowship with scouts around the world and symbolic of all Cub Scouts, Boy Scouts and Explorers striding into the future represents their hope that all that is fine in our nation’s past will continue to live in future generations.  The male figure symbolizes love of country, citizenship, patriotism, loyalty, honor, integrity, courage, clean living, and physical development.<br />"+
              "<br />The female figure symbolizes the spiritual qualities of good citizenship, enlightenment with the light of faith, love of god, high ideals, liberty, freedom, democracy, love of humanity, lighting the way.<br />"+
              "<br />Got all that?  It does sorta explain that the thing coming from the woman’s hand is light of some kind.  Otherwise, it loads an impossible, vast burden of qualities that is totally invisible to the unindoctrinated viewer. There’s a lot more that could be said of this revealing text.  Its rigid gender distinctions, privileging of male over female, and assumption of American global superiority are all worthy of analysis in their own right.  Were they official policy of the Boy Scouts?<br />"+
              "<br />More important here, just what is this monument now?  Though located directly on a major tourist route, in President’s Park between the White House and National Mall, it is rarely noted at all.  Last time I was there, I saw only a family sitting on one bench eating lunch (and staring elsewhere) while across the way a homeless man slept on another bench.  It’s a good place to be left alone.  The few viewers who do note the monument are often bewildered and/or appalled, for obvious reasons.  In recent years, the Boy Scouts have been fundamentally tainted as an organization, by what has been called an “epidemic” of pedophilia and other sexual abuse scandals.  So much so that new laws have been passed in response.   Thus even former Boy Scouts are disquieted by a commemorative statue of a naked man (with adult female enabler?) standing behind a young boy.<br />"+
              "<br />This monument is an arrogant, overblown thing, reactionary even for its time (the year arch-conservative Barry Goldwater lost by a landslide for President).  Whose idea was it in the first place?  Its sculptor, Donald De Lue, was a prolific maker of overtly heroized imagery, often involving military events from Vietnam to Valley Forge.   Hardly least are his three separate monuments at Gettysburg to different groups in the Confederate army, produced in the 70’s, well after the Boy Scout monument.   Some portions of the Boy Scouts themselves, at the time of the monument, also employed confederate regalia and even marched with neo-confederate groups (and many confederate monuments specialize in windy rhetoric), so the commonality might even be more than superficial.<br />"+
              "<br />More important, the Boy Scout Memorial is an object lesson in how a monument dies.  The polar opposite of the Lincoln Memorial, which was created for one audience but thrives with help from a very different one, the Boy Scout Memorial sits alone, not very easy to look at, with very few people looking.<br />"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0477,
                38.8913
              ]
            },
            "properties": {
              "name": "Vietnam Veterans Memorial",
              "image": "./monument_data/vietnamVeteransMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "The Vietnam Veterans Memorial (VVM) is surely the most radical war memorial in Washington.  It is in many ways an anti-monument, refusing to speak the conventional heroic language of the many other military monuments that bedeck the city.  It would not be too much to call it a rebuke to the windy rhetoric and dull grandeur that is a mainstay of the genre.  It is thus not merely a hugely powerful and successful thing in its own right, but also a bit of an embarrassment to the upholders of tradition.<br />"+
              "<br />In form, the VVM does the virtual opposite of most of the monuments before or after it.  It is sited below ground, so that rather than looking up to the sky one is drawn down below the surface.  Moreover, since the visitor’s passageway is slanted, each viewer can be at a slightly different depth of engagement with the site.  The viewers at the VVM thus do not feel like they are a shared public on a common ground, but instead each is at a unique, more private level.  Further, rather than a shining bronze or marble effigy of some exemplary hero to focus on, we are confronted with the pictureless polished wall surface of a supremely dark granite.  In all, rather than emanating light from a source in the sky, we are presented with something more like a black hole, a gash in the earth swallowing our vision, and eventually engulfing us as we move down the passageway.   It’s a little scary and a lot therapeutic.<br />"+
              "<br />The Vietnam Veterans Memorial confronts us not primarily with a war, but rather the names of its (American) dead, all (at this writing) 58,318 of them.  It provides a focused, cathartic, and intensely personal space of memorialization and indeed mourning.  Rituals thus abound around it, such as rubbings of the impressions of names and the leaving of flowers and personal effects. Virtually all of the objects that are left at the Wall (as it is known) are kept and cataloged by the National Park Service. Thus the Vietnam Veterans Memorial is one that viewers can not only participate in but actually define and enlarge.<br />"+
              "<br />The success (and controversy) of this monument derives not just from what it presents but what it withholds. There is barely a word about why these more than 58,000 people died. In fact, two tiny inscriptions state something about their “courage, sacrifice and devotion” but they are placed where virtually no one will see them (and added over the strenuous objection of the designer). A reflection of the Washington Monument appears at one side of the vertex of the monument’s two stone leaves, a sort of ghost of the governmental presence to this, the nation’s official monument to its disastrous war in Vietnam.<br />"+
              "<br />The VVM’s unconventional design was deeply disturbing to those who wanted a monument that looked like all the others. One of its early backers stated “I never in my wildest dreams imagined such a nihilistic slab of stone.” The right-wing outcry became so great that two years later Frederick Hart’s bronze sculptural group of three exemplary soldiers was added to the area, and a flag pole placed by them.  Hartt had placed third among the original competitors for the design, but was elevated by the political power of his constituents.  This less-visited addition, sort of an anti-anti-monument, does not neutralize the original memorial so much as confuses it (and visitors).<br />"+
              "<br />It is sometimes said that the VVM is a monument like no other because the Vietnam war was a war like no other.  More exactly, the VVM owes its unique nature to the unique openness of government to the governed that took place between Watergate and the election of Ronald Reagan. What is most remarkable about the monument is announced in the title itself.  This is far more the veterans own monument to their experience than that imposed by any governmental overseers.  It was funded by a grassroots network led by Jan Scruggs, an Army mortarman during the war.  As such, veterans had a major voice in chosing the final design and seized upon that of Maya Lin, at the time a first-year graduate design student at Yale.  Signed into law by Jimmy Carter in July 1980, the VVM barely negotiated the coming of Ronald Reagan, whose Interior Secretary, James Watt, initially refused to issue a building permit for it.<br />"+
              "<br />Yet “The Wall” is so popular that several replicas or versions have been built around America, and a “moving wall” even brings the experience to towns across the country.  There is no other American monument that serves its constituency so directly, or been so influential among modern memorials."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0502,
                38.8893
              ]
            },
            "properties": {
              "name": "Lincoln Memorial",
              "image": "./monument_data/lincolnMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Occupying a central location on axis with the Capital and Washington Monument, the Lincoln Memorial is dedicated to the memory of our 16th president Abraham Lincoln, the Great Emancipator. It may be best known today as the place where Martin Luther King gave his “I Have a Dream” speech during the March on Washington of 1963. King now has his own memorial not far away, so this monument has in a sense helped to spawn another. Yet the Lincoln Memorial is also a monument suffused in irony, just insofar as it has been part of a people’s struggle for equality.<br />"+
              "<br />The Lincoln Memorial has a long history as a site for continuing Lincoln’s legacy, dating from the concert on Easter Sunday 1939 by the legendary contralto singer Marian Anderson, which was given to a vast crowd of over 75,000, as well as a radio audience of millions.  Anderson had been turned away from a proposed date at nearby Constitution Hall owned by the lily-white Daughters of the American Revolution (DAR).  The hall’s owners told Anderson’s manager that no space was available on that date.  What they really meant was “We don’t allow blacks in our building and we were unable to imagine that a famous and accomplished opera singer who we initially agreed to could be African-American, so we’re weaseling out.” At the behest of First Lady Eleanor Roosevelt, who also immediately cancelled her DAR membership, the Lincoln Memorial was made available where Anderson sung to a far greater crowd and created a historic event.<br />"+
              "<br />Ever since that moment, the Lincoln Memorial has served as a rallying place. It is a central tourist stop for black viewers.  It also draws people like Donna Murphy, who sees it as a logical place to discuss white privilege and racial inequality in America.  [You can hear her words at the bottom of this page]<br />"+
              "<br />In historical perspective, this is absolutely remarkable. At the monument’s inauguration in 1922, America was so racially segregated that the white audience for the inauguration sat in the central aisle directly in front while African-Americans were restricted to a distant section across the road, a section not even marked in the inauguration’s official program. Twenty-one African-American guests left in protest. Even more striking, and still evident today, the monument itself bears almost no mention of slavery, except as an portion of the Second Inaugural Address inscribed within the building, and placed where it is rarely viewed.  Similarly, its painted allegorical imagery carefully avoids any representation of the actuality of Lincoln’s time. The inscription directly behind the head of Daniel Chester French’s dazzling, colossal sculptural rendering of Lincoln states only that he “saved the Union.” This is the main thing the casual visitor can read. Its author, the art critic Royal Cortissoz, justified it stating “By saying nothing about slavery you avoid the rubbing of old sores.”  Even more than half a century after the Civil War, not having their slaves apparently still bothered people influential enough to shape the design of a national monument and the image of a national hero.<br />"+
              "<br />But that was then.   The Lincoln Memorial’s importance today is not that mandated by its governmental creators, who eventually approved a chilly, remote space, an excruciatingly detailed neo-classical temple (though it had first been intended as far more open to the outside). But the 6.2 million visitors who make this the most-visited monument in Washington do not abide by the silence and unquestioning reverence that would seem to be demanded.  Instead, their voices and visions continually remake the Lincoln memorial as a living monument which speaks to our continuing and diverse identities and challenges as Americans.<br />"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0478,
                38.8878
              ]
            },
            "properties": {
              "name": "Korean War Veterans Memorial",
              "image": "./monument_data/koreanWarVeteransMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Between 1930 and 1970 the monumental landscape of the National Mall changed very little.  The following 40 years changed it decisively, not just visually, but also in terms of the very function of the monuments, bringing both a new relevance and a new partisanship to them.  The Korean War is still called the “forgotten war” despite the geopolitical formation it created, which endures to this day.  It must have seemed particularly forgotten to its many living veterans alive in the 1980’s, after Maya Lin’s memorial had opened to the veterans of the more recent Vietnam war.  So they organized and got theirs in 1995.  About a decade later, in 2004, the veterans of the even farther in the past World War II received their own commemorative monument.  The Korean War Veterans Memorial (KWVM), then, is in the middle of a series of reactions, largely set in motion during the Reagan presidency, which has fundamentally changed the national Mall. It is perhaps the key monument for understanding the changing dynamic of monuments at the time.<br />"+
              "<br />To call a monument “reactionary” is not so much to place it in a political context as a visual/artistic one.  But the two are related.  The nation’s official monument to the Korean War even bears a name parallel to the earlier Vietnam Veterans Memorial (VVM).  Only these two invoke the veterans themselves in their titles.  It is located directly across the Mall’s reflecting pool from the Vietnam monument itself, and seemingly serves as kind of a counterbalance. It too presents an angular site and contains a long vertical wall of individual soldiers.  The latter is a direct inspiration of the VVM, though individuals are here pictured rather than named.  But as a monument, the KWVM also looks forward, anticipating some of the conventionality and literalism that dominates the WW II memorial.  Both the Korean and WWII monuments contain (unused) “meditative” pools, both attempting to remove the weight of contemplation and mourning from the majority of the site.  This is much unlike the Vietnam monument, which suffuses contemplation throughout its every inch.  Even more, both of these latter monuments lapse into the visual literalism and bombastic explanation for their respective wars that are studiously avoided by the VVM, another key to its remarkable power.<br />"+
              "<br />The most visually dominant aspect of the Korean memorial are the 19 full-scale cast metal figures of soldiers on patrol.  This very conception ties it not to the Vietnam monument at all, but the, itself deeply reactionary, realistic bronze grouping of three soldiers across from the VVM, sponsored by the opponents of the approved design, and only later incorporated, by a different administration.  By contrast, Maya Lin’s VVM works resolutely to eschew patriotic sloganeering as a means to justify the massive number of American deaths it documents.  The Korean memorial, like almost all war monuments before and since, instead works hard to make such a justification, pushing the weight of history into a retrospective meaning.  One other thing about the Vietnam Veterans Memorial animates the later monuments as well.  The VVM, especially in its early years, became a gathering place, for veterans, families, political partisans and others to meet and interact.  Rather as the Lincoln Memorial functions in the context of race, the VVM became the center of a community highlighting questions of militarism and its subjects, if not victims.  The establishment of the Vietnam monument thus raised the possibility not only that veterans could receive major, striking monuments, but also that veterans of earlier wars, often appalled at the antiwar protests against Vietnam, deserved their own voice and space.<br />"+
              "<br />That the Korean monument was part of a sequence, and countered the Vietnam memorial was pretty clear at the time.  Writing on the eve of its public unveiling, the Washington Post’s architectural critic worked hard to praise the Korean monument, but also explicitly deemed it less than the greatest monuments on the Mall, lacking the “aesthetic grandeur and solemnity” of the Lincoln Memorial, nor meeting the excellences of the VVM or Grant Memorial.  He also called it “a sharp contrast” to the VVM, for being “dedicated to the concepts of service, duty and patriotism.”   In his haste to compare all, though, the critic misses some of what distinguishes the monument.<br />"+
              "<br />The Korean War Veterans Memorial itself is surely the most theatrical of any on the Mall.  It is dominated by a group of nineteen American soldiers advancing through a sharply-angled triangular patch.  The viewer must enter from the rear, and thus walks through the monument in the same direction as the soldiers.  One soldier at the very rear one even turns toward the viewer in a direct address.  Cast of stainless-steel, they wear the uniform rain poncho of the time, which strikingly inflates their shapes and hides their bodies. They are differentiated by headgear and weapons, each representing different forces within the military of the time.  This grouping and that of the more than two thousand figures pictured on the adjacent wall have been carefully selected to reflect the racial and cultural makeup of the fighting force as a whole.   Which means in practice that they are predominately Caucasian males.  Much like the wall of the VVM, which the Post critic said it “shamelessly” copies, the wall of the Korean monument also reflects viewers standing before it.   But unlike the VVM, viewers see not only their own faces juxtaposed with the assembled faces of soldiers inscribed in the black granite stone, but also behind them the bright reflections of the statue-soldiers fighting the Korean war.  Viewers thus see themselves sandwiched between effigies and images of those who fought the war, in a kind of image time-machine.  But there is also a symbolic significance to this experience. The 19 soldiers cast 19 shadow-figures on the wall, together making 38, the key number to the monument.  The war lasted 38 months, and centered around the 38thparallel that still separates North and South Korea.  In a way distinct from the conceptual rigor of the VVM (or the bombastic conventionalism of the WWII monument), the Korean memorial is thus a unique monument of both artistic realism and illusionism, in a mode worthy of Baroque sculpture.<br />"+
              "<br />Until it isn’t.  One walks in the direction of the soldier’s attentions, turning back to see their vigilant faces.   Beyond the vertex of their triangle is a (predictable) American flag, and meditative pool.  Even more, unlike the unique VVM, the overseers of this monument could not keep themselves from inscriptions to give the war meaning.  The pavement before the soldiers states “Our nation honors her sons and daughters who answered the call to defend a country they never knew and a people they never met.”  Fair enough, though obviously the polar opposite of the non-justifying VVM.  But the monument goes farther, putting in a more prominent place on a vertical wall by the pool a platitude more appropriate to bumper stickers, the paradoxical statement that “Freedom is not free.”  This obviously says nothing particular about the Korean war, its soldiers or its historical moment, though it is particularly popular today and almost official doctrine.<br />"+
              "<br />Stranger still, just steps away from this inscription are very specific numbers of military casualties in the Korean war.  They are not quite correct (as was known at the time of the monument’s dedication), and seem to overstate by about twenty thousand the number of battle dead.  Remember the old saying that “Truth is the first casualty in war”?  The number on the inscription could, of course, be changed.   As it stands, however, the Korean War Veterans Memorial, like all monuments, says as much as what is being made of a war today as what transpired almost 70 years ago."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0423,
                38.8829
              ]
            },
            "properties": {
              "name": "Franklin Delano Roosevelt Memorial",
              "image": "./monument_data/franklinDelanoRooseveltMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "There are many Americans with many monuments dedicated to them.  The number of monuments itself is not a measure of any figure’s actual historical importance, so much as the compulsion of groups later on to justify themselves by lionizing particular forbears.  The apologists of the confederacy make a particular mark here.  Based solely on number of public monuments to then, Robert E. Lee would seem to be among the most consequential people in all American history.  Even more astonishing, Nathan Bedford Forrest, a slave merchant cum Confederate general cum Ku Klux Klan founder, would be far more significant than the three presidents from his home state of Tennessee put together, with far fewer monuments dedicated to them.<br />"+
              "<br />All monuments reflect specific aspects of a historical figure’s life.  But who has the right to decide what to represent?  And what if the historical figure himself disagrees?  That is the particular question of the Franklin Delano Roosevelt Memorial.  The FDR memorial covers more than 7 acres, making it the largest single monument on the Mall in area.  On which account, nothing could be more unlike the small single stone block FDR himself stipulated as what he wanted: modest, “plain without ornamentation”, and made of any old stone “limestone or granite or whatnot.”  In 1965, this very memorial was erected in the spot FDR had asked for, not on the Mall, but a small green lawn next to the sidewalk of Pennsylvania Ave. by the National Archives.  The sheer contrast in size (and related matters of comparative expenditures, effort etc.) between these two illustrates vividly the yawning gap between private and public commemoration.  Even more, it puts on display the very process of monument making.<br />"+
              "<br />According to its designer, the FDR Memorial is not about the man whose name it bears.  Instead, it is “a way of communicating to this country what he stood for.”   But who gets to decide that?  And what if, as this monument vividly illustrates, we don’t all agree?<br />"+
              "<br />A product of the 1990’s, the FDR Memorial is the culmination of a design process that flirted with commemorating the progressive president with actual modernist imagery, in a way quite unusual for Washington’s tradition-minded mandarins.  The eventual built monument itself is distinct from others on the Mall.  Unlike the signifying structures that focus most monuments, the FDR Memorial is more journey than destination.  Designed by a landscape architect, it is a pleasant expanse that requires strolling through rather than standing in awe.  The memorial is divided into four parts corresponding to FDR’s four terms as president, each clearly identified by an inscription in the paving stones.  The viewer thus walks through symbolic landscapes devoted to Roosevelt’s presidency from the Great Depression through World War II.  Elaborate, inventive stone treatments, water elements, sculptures and inscriptions tell a story of the president and the nation he guided.  The sculptures were commissioned from some of the country’s leading sculptors, notably George Segal.  As all too often when important artists do government commissions, the results lack the edge of their greatest works, tamed by the need to fit committee stipulations and overtly didactic purposes.   Yet they also manage to be more than conventional for the genre and truer to the monument’s modernist heritage.  Particularly striking in this regard are the works by Robert Graham commemorating FDR’s numerous employment programs.<br />"+
              "<br />What image of FDR is presented by this monument?  It is shot through with his noble words, some of which can sound especially poignant today. Among other things, FDR emerges as an unwilling military leader.  The only words of his that are inscribed in two different places are “I hate war”, part of a longer passage empathetically describing its horrors and effects on men, women and children.   However, very nearby on the Mall, the World War II memorial includes a portion of FDR’s Pearl Harbor speech, a call to merciless battle.  There FDR states “the American people, in their righteous might, will win through absolute victory.”   Of course, both of these are FDR’s actual words, and part of his complex career.  But no monument tells the whole story, it is a history fragmented as different monuments clearly work to remake their own stories to fit their particular representations of history’s makers.<br />"+
              "<br />Even more directly, FDR himself appears twice in this memorial, most notably in a larger-than-life size bronze sculpture, seated with one leg extending from the cape draped around him.  His famed Scottish terrier Fala sits alert at his side.  This colossal image of FDR is the monument’s most direct address to the long history of presidential image-making, closely related to the colossal image of Lincoln enshrined in the Lincoln Memorial nearby.  Both figures are seated and looking over the heads of spectators, sharing a founder’s radiance and profundity.  The statue of FDR is almost the only thing in the entire monument that must be looked up to, as it alone is placed on a level distinctly above that of the viewing pavement.<br />"+
              "<br />But if FDR’s image almost aspires to be timeless, its present-day audience has had its own impact. Beside cape and dog, another FDR trademark is absent, his cigarette in its long, slim holder.  Held at a jaunty angle in his smiling visage, it was a trace of his optimism that held up a people through war and depression.  Common as this may have been in the period pictured, it is now excised.  But if what was common then is now covered up, what was very much covered up in FDR’s time is now evident in the monument: the far more consequential matter of FDR’s disability.  He suffered a permanent lower-body paralysis at age 39, which made unaided movement almost impossible.  During his lifetime, great pains were taken to hide this condition from FDR’s public image, in part by tacit agreement by news media.<br />"+
              "<br />This same past tendency is evident in the FDR monument’s image, in which the seated man is covered by a cape that hangs down to (and even beyond) the floor on which he is seated.   His body is largely hidden.  But others, outside the official circle of monument designers, saw FDR’s struggle with his disability in another way: as an inspiration.  Disability advocates seized on the “normalized” image of FDR, and successfully led a campaign to add another sculptural effigy to the monument, this time of the president seated visibly on a wheelchair.<br />"+
              "<br />Though controversial particularly to some conservative critics, four years after its initial dedication this new sculpture was added to the memorial.  It is somewhat awkwardly placed at the front before the areas representing FDR’s presidential terms, in what the newly-made inscription describes as a “prologue.”  There FDR sits alone on his wheelchair in a largely unadorned forecourt, accompanied only by a quotation from his wife Eleanor about his physical struggle.<br />"+
              "<br />This newer image of FDR is now the first thing a viewer sees when visiting the monument.  Compared to the more grandiose later one, it is smaller, now on a merely human scale, and down to earth, on the same pavement as the viewer.  FDR’s face is now a mask, his eyes hidden behind the  glasses he always wore (except when being formally portrayed).  This is clearly a different image of one of our greatest presidents, now vulnerable and removed from the record of his glories.  Yet, as a park ranger told me, it is this wheelchair-bound Roosevelt, not the magisterial one inside, that viewers spend far more time seeing and accompanying in the photos they take."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0405,
                38.8894
              ]
            },
            "properties": {
              "name": "World War II Memorial",
              "image": "./monument_data/worldWarIIMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Monuments are always at least as much about the people who erected them as the things they commemorate.  And sometimes they’re even moreso.  If the World War II Memorial is not a complete monstrosity, you can’t blame it for not trying.  You can’t blame it, in particular, for the situation that bore it, which effectively undermined the 1901 McMillan plan that created the modern National Mall, with its long, elegant perspectives and grand aesthetic wholeness. That was then. A century later, September 11, 2001 ushered the world into the global realities of the 21st century, which proved to be quite different from the orderly triumphalism that the age of Clinton wanted to announce. In strange harmony, the very look and genesis of the World War II Memorial, a campaign begun under Clinton and completed at at the end of the first term of George W Bush, in 2004, changed fundamentally the monumental landscape of Washington, DC. The view from Congress has been altered by circumstances alright. This monument, after all, was decisively completed and dedicated in the midst of a war with Iraq and the grim, frightened security state incarnated by the USA Patriot Act. It shows us at least as much about the time that built it as about the war it commemorates.<br />"+
              "<br />Like pretty much every national monument after 1980, the WWII memorial has had to acknowledge (and compete with) the remarkable success of the Vietnam Veterans Memorial.   While some have tried to emulate it, the current WWII memorial seems to do everything possible to deny the VVM.  The WWII memorial architect’s original design was a simpler, more elegiac one, even seemingly under the ground line, in a way more harmonious with the VVM and attuned to its appeal.  But after many design reviews and changes demanded from conservative political and architectural overseers, it became a monument to an earlier generation that also seems based in the norms of an earlier time.  Hence the common criticism of its design, with its busy composition of great bronze eagles and rows of victory wreaths as well as ostentatious neo-classical forms, that it seemed more appropriate to moments past: to Soviet battle monuments or the age of Napoleon.<br />"+
              "<br />Unlike the personal, individual, even ambivalent experience the VVM allows, the WWII memorial has little role for the viewer. It is all bluster. As Kirk Savage well notes, the WWII memorial “splashes its message of righteous force and moral triumph from one end of the space to the other.” There is little possibility, and less motivation for leaving interacting.  Soldiers themselves have little role to play.  24 small bronze panels by Raymond Kaskey, located by the steps on uneven ground, picture anonymous soldiers in a sort of sentimentalized narrative that has little to do with fighting or death. Even more telling is the “Field of Stars” on the “Freedom Wall” at the very axial center of the monument. The four thousand stars are meant to commemorate the approximately four hundred thousand of the American war dead. They are easy to miss for most viewers, competing with the many large forms nearby, the incessant hiss of fountains and the distant vista of the Lincoln memorial.   Even more, the stars are surrounded by a moat, a pool of water which is forbidden to enter. The viewer is forced to stand back and read the overbearing moral which is carved before them, “Here We Mark The Price of Freedom.” This vista doesn’t get a lot of committed viewers. Indeed, visitors have less role to play here and often seem dazed, bored or both. They are a lot less likely to even obey the visiting rules, like not wading in the water of the central fountain.<br />"+
              "<br />The process of building the monument itself reflects how little share the spectator has, as many of its characteristic features were imposed by contemporary politicians rather than proposed by veterans of the war or the public.  Most crucial is the very site of the monument. The long, open, grassy perspectives from Capitol to Washington Monument to Lincoln Memorial served for a century as the basic skeletal structure of the Mall, holding together, and balancing, its many monuments and the views that they engendered as well as facilitating spaces for protest.   A controversial act passed by Congress in 2001 broke the fundamental law that guranteed this arrangement, allowing the monument to be placed directly on the Mall between the Lincoln and Washington monuments, thus breaking the spatial and visual continuity between the two, and destroying both the symmetry of the whole and reciprocity of views (and physical travel) along its grand expanse.<br />"+
              "<br />A symbolic national memorial, the WWII Memorial proceeded with little attention to symbolic aspects of its own creation. The design of an Austrian-born architect, one of the two firms that actually constructed the monument was wholly owned by a German firm that had used concentration camp laborers during the Nazi era. Perhaps even more amazing, the monument continues to serve as a projection for current (largely right-wing) political projections. Thus in 2014, a decade after the monument’s completion, the Senate passed a bill which would have placed a plaque on the memorial with the words of FDR’s D-day prayer, an act said to reflect America’s “Judeo-Christian heritage and values.” Opposed by groups from the ACLU to the American Jewish Committee to the Interfaith Alliance, this illustrates the continuing appeal of this monument to attempts to impose or project contemporary ideals.  And continues the question of just whose memorial this really is.  After all, stylistically at least, it makes it look a bit like the other guys won."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0353,
                38.8895
              ]
            },
            "properties": {
              "name": "Washington Monument",
              "image": "./monument_data/washingtonMonument/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "The Washington monument orients almost everything else in the symbolic landscape of Washington, DC. It’s always useful in explaining directions to tourists on the Mall, and is thrilling to see out of the airplane window when landing at National airport. It’s so familiar that we can barely recognize how radical it is.   Completely unadorned and without visible inscription, it is best seen as a sort of mirror.<br />"+
              "<br />It is not just vast in height, but also earliest in time: the only major monument on the Mall dating from the 19th century. In shape it is an obelisk, an Egyptian solar tower. Like other Egyptian architectural forms, such as the pyramid (which was also proposed for a monument to Washington), this one has long been used in the West as a funerary marker. But this obelisk is like few before in that it is completely stripped of any exterior inscription or decoration: a smooth blank slate more than 550 feet high.   In this, the monument resembles the pure, and often huge, geometric forms dreamed (and rarely accomplished) by the architects of the late 18th century.  Fittingly enough, this is the same historical moment that produced the very conception of our Constitution. The Washington Monument, that is, has a lineage very similar to that of America itself.  The monument to the “father of our country” shows much about what fathered that country.<br />"+
              "<br />But the monument we have now is at least as much forward-looking, transcending the intention of its designer.  The original design of Robert Mills called for a smaller tower surrounded by a colonnade with conventional heroic figures.  The tower was built first and got a few hundred feet up before (what else?) its backers ran out of money and descended into squabbling for control. Mills died in 1855, and the Civil War began a few years after.  The half-built obelisk inhabited Washington as a significant fragment for decades.  The rupture of the period around the Civil War haunted the capital of a nation otherwise preoccupied and unclear about defining itself, while the half-built monument served as a sort of illustration of America’s own inability to realize itself.  The Washington monument was only fully completed forty years after its start, long after the death of its architect, and bears the scar of its divided birth in the unmatching stone coloration clearly visible about halfway up its side.<br />"+
              "<br />The Washington Monument we know today was shepherded into existence by Lt. Col. Thomas Casey of the US Army Corps of Engineers, who skillfully warded off governmental meddling with the ongoing project. On the centenary of the external structure’s completion, in 1984, this triumph of technology was recognized by America’s primary association of engineers, who also (true to the sprit of their profession) sprang for some walkways to improve access.<br />"+
              "<br />The more recent history of the Washington Monument is just as revealing about our time as it was to the 19th century. Its renovation in 1997 was underwritten by the Target department store chain, serving as “corporate partner” to the National Park Service. For a while it was scaffolded in what resembled a giant condom with the Target logo.  Even more, after a century of openness, beloved for views of the city from its apex, the monument was closed to the public again after being damaged in 2011 by a hurricane and earthquakes centered in nearby Virginia. These highly unusual earthquakes were suspected by many to be a result of the process of underground gas extraction (called “fracking”) practiced across the country. After being reopened three years later, it was again shut down in 2016 due to breakdowns in its aging elevator system.  In September 2019 it opened again, after being closed for 5 of the last 8 years. While half the funds for renovation come from the government, half were raised by a private “angel” who candidly remarked that it’s tougher to find funds for monuments than more “important” things.<br />"+
              "<br />The monument that was hobbled by political division in the 19th century is victim of governmental practice today as well, particularly its increasing dependence on private wealth.  A vision that thrived through the 20th century is not doing so well in the 21st.  Our monuments, indeed our public sphere itself, are far more fragile than they appear. Rather than the nebulous question of the Age of Trump, of whether democracy will survive, we might narrow our focus more concretely to ask whether this monument will, and in what condition.  It’s a gigantic stone straw in the political wind."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0326,
                38.8911
              ]
            },
            "properties": {
              "name": "National Museum of African American History and Culture",
              "image": "./monument_data/nationalMuseumOfAfricanAmerican/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "The National Museum of African American History and Culture (NMAAHC, for short) is the Smithsonian’s newest museum.  It is not the first Smithsonian museum to be devoted to African-American culture.  That would be the Smithsonian’s long-lived and under-staffed Anacostia Community Museum.  Founded in 1967, the Anacostia museum was a radical gesture of outreach in its time, from white, centralized, official “Washington” to another place: black, impoverished “DC.”  NMAAHC then specifically represents not recognition but a salutary placement of African-American culture and identity directly in the purview of the Smithsonian’s other “master” museums.   Organizationally, it bears some similarities to the Smithsonian’s other museum of unabashed cultural identity, the National Museum of the American Indian.  While some right-wing cultural critics may decry the Smithsonian’s bowing to “identity politics” by allowing them in at all, one might just as easily note these two museums are located at the very edges of the museum complex, both in antipodal spaces that were long considered inauspicious or just unbuildable.  And both have worked wonders in erecting astonishing, original, and quite beautiful buildings from the leftover sites they were given, in the process presenting a dramatic contrast to the often blandly modernist or conventionally traditional buildings that make up much of the museum complex. The symbolism of this is lost on nobody.  To be sure, there have been predictably partisan controversies over aspects of the display (like some right-wing whining that Clarence Thomas is not adequately adulated in NMAAHC).  But both museums are fundamentally the product of bipartisan coalitions, the sort of thing we now lament as extinct.   Essential to NMAAHC was the steadfast support of George W. Bush, who signed the museum project into law, and attended the opening.   Even more, while the House sponsor of the legislation was Georgia’s John Lewis, legendary legislator and crusader for civil rights, its Senate sponsor was arch-Republican Sam Brownback.<br />"+
              "<br />NMAAHC’s award-winning building is a dazzling, complex array of angular spaces, which reads in different ways from different viewpoints.  In height and general massing it is similar enough to the other museums and government buildings in its neighborhood.  But it also different enough in coloration and ornamentation that it also distinguishes itself, the only Smithsonian museum with an exterior not limestone or marble.  It also provides a marvelous transition between the dense, urban buildings on the museum portion of the Mall and the open spaces by the Washington Monument and the western part of the Mall.  Indeed, the angles of its upper sections directly address the angular top of the obelisk of the Washington Monument.  Thus the Mall’s newest resident is a sort of punctuation mark, which clearly locates itself in connection with the original monument of the entire locale (totem, of course, of the nation’s very originator) and all that has grown up around him. Again, none of this pragmatic description of the space and makeup of the NMAAHC can be seen without metaphoric significance for the place of African-American identity in this long-standingly majority-White nation. It is a building, and a museum, that speaks back, inscribing in detail African-American presence and the long reality of enslavement in the American story of which the Smithsonian is the nation’s privileged keeper.  Indeed, it specifically suggests far deeper and wider roots than the unornamented, abstracted token of George Washington.  The corona of metal latticework that surrounds the building is shaped in a way that harks back to traditional three-tiered Yoruban crowns common to West Africa, a distinctive shape which is also the very logo of the museum.  The intricate, filigreed latticework itself, which is visible both inside and outside the museum, is also an homage to the distinctive metalwork done by enslaved African-Americans throughout the South.<br />"+
              "<br />Beyond symbolism, even quite literally the building intimates the deep and complex roots of slavery.  NMAAHC is the deepest of Smithsonian museums, excavated to 80 feet below grade.  Some of the museum’s most somber, powerful and even shocking displays are to be found deep underground. They present to the general public the reality of centuries of slavery: shackles, whips, a slave ship and much more. In a way not even hinted at in the external appearance of the building, quite consciously, and indeed brilliantly, NMAAHC converts physical space into historical time. Visitors begin their journey in a large elevator which drops from the low concourse to several deeper levels.   Dates marked on the elevator shaft during the descent turn the calendar back centuries, going far before 1776 to 1619, the year of first arrival on American shores of Africans kidnapped for enslavement.  Whereas the Washington Monument perches quite uneasily on a flat platform over loamy soil in which it has hardly settled, NMAAHC has roots, roots that can still shock the visitor, deep down in the American soil, dating back to more than a century even before Washington’s birth in 1732.<br />"+
              "<br />NMAAHC’s bright, airy above ground floors follow African-American experience into more familiar times, of Jim Crow, race riots, segregation, and the struggle for civil rights.  But in the process of widening the scope, and adopting an African-American viewpoint, America itself is a bit defamilarized from the conventional story.  Perhaps a thousand yards away from the Jefferson Memorial, with its quotations that make Jefferson sound like an abolitionist, in NMAAHC a vast and menacing bronze statue of Jefferson looms, almost blocking the visitor’s path into the open air of the floors above.  This Jefferson, though immediately recognizable, stares down at the viewer in a chilly gaze.  He holds a book, but not the scientific or philosophical tomes for which he is best known.  It is an account book.  Behind him are 609 bricks each stamped with a name corresponding to the equal number of slaves he owned (on more than one plantation), at least six of whom were his own children.  Floors away, this path ends with (might one say it “leads to”?) the election of a black president, but on the way it is a vastly different story, from a different viewpoint, than that of many previous accounts of American history.<br />"+
              "<br />NMAAHC’s upper floors celebrate in detail black achievement across diverse fields from sports to business to all areas of culture.  For many viewers, both black and white, these exhibits are sort of a relief.  But it is just as obvious that they are a flowering superstructure from roots centuries long and unsparingly detailed.  On which account, perhaps the most striking and heartening thing about NMAAHC is that it has instantly become one of the Smithsonian’s most popular museums.  While it has not been universally applaud the building has even required stepped-up maintenance to counteract the wear and tear of so many visitors, eager to connect with its story."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0230,
                38.8896
              ]
            },
            "properties": {
              "name": "National Mall",
              "image": "./monument_data/nationalMall/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "The visitor information desks at Smithsonian museums and the National Gallery have lists of questions to expect from visitors and how to best answer them.  Many are predictable and common to museums everywhere.  One that is unique to this area, however, is: “We heard there was a great Mall around here.  Where is it?”  The National Mall (more often just called “The Mall”) suffers a bit from an identity crisis not of its own making.  It is as close we can get to a literal place where America goes to represent itself to itself, and whose issues are ours.<br />"+
              "<br />Like the nation, the Mall is really as much an idea as an object, and the result of centuries of change.  The modern project for the Mall was decreed by a governmental commission, the MacMillan Commission of 1901-2, to unify into a single formal space what had been a haphazard, locally orchestrated series of spaces between the Capitol and Washington Monument.  The longer half of the current Mall, between the Washington Monument and Lincoln Memorial (including the Tidal Basin), was only then coming into being, by strategic use of landfill and dredging the Potomac.  The plan created the land as much as vice-versa.<br />"+
              "<br />The uses of the land during the 19thcentury are a sort of catalog of the country and its possibilities, with carp ponds, unpaved roads and an open sewer at its center.  A railroad station also stood on the original Mall site, as well as military barracks.  Hardly least, it was also a site for brothels as well as a slave pen where slaves were openly traded.<br />"+
              "<br />When rechristened as National Mall, that is, when Nation (and thus national identity) was injected into the site, it grew only more portentous as a project.  Only from the start of the age of Reagan has it has become the traditional gathering site for presidential inaugurations.  Its now sacrosanct nature gives 4thof July and Veteran’s Day celebrations a certain official imprimatur, often sanctioning a demand to keep the tone “patriotic.”   At the same time, it has been the site of choice for innumerable demonstrations.  Perhaps the most dramatic contrast of these two functions are the crowds on successive days in 2016 between those celebrating Donald’s Trump’s inauguration and the, even greater, number of citizens subsequently protesting it.<br />"+
              "<br />Yet perhaps the most dramatic event on the land, making visible the immense weight of representation that bears on the Mall, and Washington in general, is one much earlier. Among the longest continuing protests on the Mall was its role as center of the occupation in summer of 1932 by the “Bonus Army” consisting of more than 40,000 people: World War I veterans and their families demanding the payments to them promised by a former administration.  While the Bonus Army encampment was just one of many “Hoovervilles” that sprang up around the country during the Great Depression, and stretched far beyond the Mall in expanse, its particular fate on the theatrical space of the National Mall is striking.<br />"+
              "<br />The marchers had asked that Congress pay them immediately, due to the situation at the depth of the Depression.  Congress refused.  Instead, on the 28th of July, under the direction of President Hoover, two ambitious young military generals, named Patton and MacArthur, led a military force of 600 soldiers: infantry, cavalry, even a machine gun unit, to violently uproot the former military veterans.  It was a battle of Americans versus Americans, and indeed soldiers against soldiers, in the shadow of the Capitol.  Unarmed, the Bonus army was of course completely routed by the standing military.  Indeed, MacArthur did not stop at clearing the downtown Mall area but advanced toward the Anacostia river flats, which held further occupiers.  Public dismay at this spectacle was one reason Hoover lost to FDR in the election that fall.  When a contingent of the Bonus army returned the following summer, Eleanor Roosevelt came to welcome them.<br />"+
              "<br />This is hardly the only time the Mall has been a frame for popular concerns, one powerful enough to not just reflect but shape the course of history.  The quarter of a million people who filled the Mall on August 28, 1963, as part of the March on Washington for Jobs and Freedom, seared an image into America as well, beneficiary also of extensive coverage of the emerging popular medium of television.<br />"+
              "<br />What will the Mall be in the future?  We will see. There are more ideas for new monuments than the space will hold, which certainly suggests a kind of closure to America as a society.  But just as important is the fate of real, analog space in the age of digital experience."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0165,
                38.8883
              ]
            },
            "properties": {
              "name": "National Museum of the American Indian",
              "image": "./monument_data/nationalMuseumOfTheAmericanIndians/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Is a museum a monument? Well, it does everything a monument does (and more besides).  So how could it not be?  Plenty of monuments have affiliated museums and others directly include displays of artifacts, curios and artworks.  Even more, the two museums discussed in this website, both designated units of the Smithsonian, have a specific monumentalizing function for particular American cultural groups.  (The other is NMAAHC, by the way.) The Smithsonian Institution, after all, is the closest thing we have to a national museum complex.  Its exhibits are as closely scrutinized by everyone from politicians to tourists as the monuments on the other side of the Mall.  Often on the same days’ visit.<br />"+
              "<br />Thus the Smithsonian’s all-public museums have faced as much political controversy as the nearby public monuments.  It is hardly clear that the American public even sees much of a distinction between the two. So placing a new museum on the rapidly shrinking spaces of the Mall is a considerable undertaking, financially, materially and, maybe most of all, monumentally.  In the past couple decades, two new buildings have been erected that pretty much exhaust the complex of museum spaces between the Capitol and Washington Monument.<br />"+
              "<br />The National Museum of the American Indian (NMAI) opened to the public fifteen years ago.  It was a singular project, struggled for over decades, to give a degree of public visibility and belonging to the many native American peoples long denigrated, deceived and written out of the narrative of modern America. Giving them a specific, permanent place in “America’s Museum” is a salutary move to ameliorate, diversify and enrich the American story.  Yet it is also one replete with ironies and contradictions, and quite difficult to describe as a success in any conventional terms.<br />"+
              "<br />The building itself is a case in point.  Designed with specific Native American principles in mind, it is a dazzling rock-clad exterior, contrasting with (or maybe “putting to shame”) the far more conventional structures nearby of official Washington.  It is light where they are dark, curved where they are straight, rough-edged where they are smooth.  It is also genuinely contextual, snuggling areas of native plants and signifying rocks in its spaces, orienting itself to the heavens and four cardinal points of the compass: a genuinely edifying edifice.<br />"+
              "<br />Even more, the higher, longer expanses at its front are reminiscent of a wind-sculpted rock formation, but one pointed directly toward the center of the nearby Capitol dome.  But while this (serious but polite) confrontation of colonizer and colonized is dramatically evident from across the street, one enters the museum with no such conception.  Instead, thick tree plantings by the museum’s entrance cleverly block out the nearby, and suggest an earlier, more wild world before Western contact.  It also conjures the Mall’s own earlier existence in the 19thcentury, before it was orchestrated into a single grand vista.  You have to angle a certain very particular way just to see the Capitol dome at all.<br />"+
              "<br />And yet, on entering into the museum one is bewildered to find a conventional, white-walled, industrial/office space much like any one nearby.  This discordance is a permanent reminder of the building’s genesis.  The architect Douglas Cardinal, of Blackfoot heritage, was hired to design the building.  Cardinal’s organic, almost metaphyscial vision of architectural design is deeply collaborative.  It begins by asking stakeholders (in this case representatives of the vast range of Native American tribes) to join in a “vision session” to assess the “empirical, practical, emotional and spiritual needs of a building.”  This kind of process, with its own evolving logic and metaphysical basis, proved to be impossible to work with for the Smithsonian’s federal, bureaucratic processes.  Cardinal was formally removed from the project before interior work was much advanced. So NMAI is really two different buildings reflecting two different cultures, only one of them Indian.<br />"+
              "<br />The museum as a whole is as split and paradoxical as the building itself.  The NMAI actually embaces a vast collection housed in two different cities.  Most of it was collected in the early 20thcentury, constituting the vast George Heye collection, with its own building in downtown Manhattan.  Heye collected with little nuance, in a way admittedly destructive to Native American communities, part of the now discredited paradigm of “salvage” anthropology. The Heye collection consists of many objects largely taken out of context and often with no proper provenance.  This is a flashing red light in museum terms, since it may include objects looted, stolen or otherwise appropriated.   But even if this were not true, there are still two other conceptual barriers to the project of the museum.  First, there is considerable emphasis in many Native American cultures to keep the most important things from view, and particularly to keep them from Western scholars and scientists (and museum visitors) when stripped of their proper ritual significance. Many Native Americans today are working to take back their rightful artifacts, despite its effect on museum holdings.  To its credit, the NMAI is part of this repatriation effort, another paradox in the museum’s existence.  But there is an even bigger bar.  The inherited Western concept of museum, particularly the “survey” museum of which the NMAI (and Smithsonian as a whole) embodies, is difficult to disentangle from the colonialist/imperialist age in which it was born and fostered.  Assembling all the types of butterflies or minerals, as the natural history museum does, is one thing.  Treating the variety of Native Americans in the same way is another. Which leads to another puzzle about this museum: its name.  It is striking that it is not The National Museum of Native Americans.  Instead of indicating the diversity of cultures with a plural, NMAI sticks with a more 19th-century “essentialist” singular.  It also, of course, uses the term “Indian” despite its many detractors.  In my experience, Native Americans do not speak of anything in the museum as “Indian” nor indeed do they have much to say about it as whole.  They are a lot more likely to focus on particular mentions and artifacts of their own tribe in their own name, be it Ojibwe or Lakota or Cherokee.<br />"+
              "<br />At the same time, I have never heard any Native American speak of this museum with anything but pride at being represented, at belonging to the grand assembly of Smithsonian museums on the Mall.  Surely those who founded NMAI knew of the inherent difficulties in creating it and steadfastly moved ahead, determined to find a place for their people.  Indeed, they deliberately set out to change traditional museum practices.  Thus the NMAI opened with few, if any, traditional curators.   Instead, it entrusted its exhibits to “community curators” in which members of a particular tribe would tell their own story.  This is an admirable, empowering ideal, particularly for peoples traditionally defined from outsiders, with languages and criteria not their own.  But in practice the results were appalling, shallow and incoherent for the external viewer.<br />"+
              "<br />While the museum has worked to move away from this disastrous model, a review ten years after its opening describes NMAI as “still trying to find its way.”  In the meantime, it remains strikingly empty inside, while its attendance has plummeted.  But if NMAI has not been the most successful museum of the Smithsonian on conventional terms, despite the many efforts and innovations of its management, in the process it perhaps speaks even more forcefully than intended about the contemporary place of Native Americans in modern America, in all their complexity."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0129,
                38.8898
              ]
            },
            "properties": {
              "name": "Ulysses S. Grant Memorial",
              "image": "./monument_data/ulyssesSGrantMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Despite our amazing museums, we don’t much think of Washington, DC as a real capital of art or culture.  That is more the business of New York or perhaps LA (depending on just what we think counts as culture).  It’s plenty enough to be the capital of politics and political power.  Architecturally, Washington is largely a conservative, and even kinda dull, place that has eschewed most of the challenges and thrills  of modernism.  It is largely a city of pseudo-classical exteriors and pseudo-Georgian interiors, the preferred mode of our ruling classes and wannabes.  Still, there is one medium practiced especially here that does connect with larger artistic currents and goes beyond a narrow conservative audience: monumental sculpture.  For it to thrive at all, this very public artform needs, natch, to connect to the larger public.  Maya Lin’s groundbreaking Vietnam Veterans Memorial is perhaps the most recent example of a monument that listened to its constituents and refused to go through conventional motions, but it is not the only one.  Another is Henry Shrady’s Ulysses S. Grant Memorial, the product of twenty intense, draining years of work.  He died, exhausted, two weeks before the sculpture’s formal dedication in 1922.  And two years before its ultimate completion.<br />"+
              "<br />The Grant memorial is far more than the conventional 19thcentury man on a horse.  Instead it gestures toward the required form of homage, while also changing and subverting it, especially by confronting the viewer with far more to see, and requiring real movement, and thought, to apprehend it all.  The monument is a long, rectangular platform consisting of three separate sculptural groups.  At the center, on a high light-stone pedestal, is the mounted general himself, in a still, detached pose of watchfulness.  Crouching lions surround the pedestal on all four sides, guarding the flags of the nation and US Army.  This alone might have satisfied the casual viewer or governmental overseer.  But at each end of the platform are two other large and compelling sculptural groups, placed at eye level to the viewer and made of far more bronze, with its flashy, reflective, eye-catching surfaces, than the central grouping.  Even more important, the distant, formalized and sedate imagery of the pedestal could not be more different from the disordered, powerful and violent actions of the side groups, which are quite visually challenging even just to decipher. Between the side groups and the center pedestal is open space for viewers to walk, turn their heads and probe the actions depicted.  There are horrifying things to discover.<br />"+
              "<br />Quite radically, the Grant Memorial has no single master viewpoint.  The side groups especially are true sculpture-in-the-round and present very different views from different places.  Here we see highly detailed Union soldiers of the Civil War, doing battle against an undepicted enemy.  The northern group presents a cavalry group in the process of charging, while the southern group consists of artillerymen moving a cannon.   Both groups repay sustained attention, even as they unsettle the initial impression one might have of them.   From afar, the cavalry group seems a resolute, ordered heroic company. The scene is dominated visually by the tip of their officer’s sword held high and his mouth open wide to order a charge, as well as a flag held slightly behind by another and at rear a soldier bent over his charging horse.  On closer inspection, it is nothing of the kind.  The horses are on a path to collide with one another and the riders are not bent on a reaching a common destination to attack as much as each is absorbed in negotiating his own perilous pathway.  With a bit more searching, we can find the source of this disorder. Just by the leading officer, a horse has fallen.  The officer’s own horse is shifting ground now that its path is partly blocked.  The tight formation of the riders to the rear may well be completely brought down by the fallen horse before them.  From some angles the fallen horse seems to have dropped by itself, but with some more movement one can find a forearm or a booted foot coming out from beneath it.  From another perspective, we can find the head of the soldier trapped beneath the horse, his body quite close to the charging hooves of the leader’s horse, and his life clearly endangered.<br />"+
              "<br />This is surely an astonishing thing to put in a monument to one of America’s greatest military heroes: a scene of unfolding tragedy amid (now seemingly) mock-heroic gestures.  It is a statement of the atomization of individuals during combat and perhaps even of the futility of war.  The artillery group on the south side of the monument carries the same theme.  Here three horsemen at front pull a wagon with mounted cannon on which three artillerymen are riding.  The viewer looks upward at the faces of the horsemen, who seem to be straining and barely in control of their rearing horses.  Meanwhile, the riders in the cart are passive and even dejected.  One leans forward, bracing against the wind that blows his garments.  Another nestles his head against a downcast comrade, who merely looks away.<br />"+
              "<br />Shrady’s amazing and largely unprecedented war monument thus impresses most of all on the viewer the lived experience, and palpable suffering, of soldiers in battle. Further, it distinguishes absolutely the difficult lives of the “grunts” and others who do the work from the distant generals on their pedestals.  Indeed, the only image of soldiers assembled in the expected conventional form are those assembled in a line on the low-relief panels just below the mounted general on his pedestal.  (These, in fact, are not the work of Shrady at all.  They were inserted two years after the formal dedication by the sculptor Sherry Fry, clearly influenced by an older paradigm of civil war monument, that of Augustus St. Gaudens).  War, this monument suggests, looks one way from headquarters and quite another on the battlefield.  And it isn’t pretty.  Shrady’s departure  from convention here is all the more amazing then one realizes he was also working on another monument at the end of his life, which was similarly completed by another artist, namely the statue of Robert E. Lee in Charlottesville, VA that is at the heart of the modern infamy of public monuments.<br />"+
              "<br />The Grant Memorial sits at the edge where the grounds of the US Capitol merge into the long expanse of the Mall.  On the very same year it was dedicated, another monument arose at the very opposite end of the Mall, where it meets the Potomac: the Lincoln Memorial.  Thus while the nation’s symbolic expanse may be centered on its founder, via the Washington Monument, it is precisely delineated at both ends by the two primary figures who oversaw the union’s Civil War victory: Lincoln and Grant.  More generally, the primary trauma of the Civil War is thus fundamentally inscribed in American self- identity.  Yet just as strikingly absent from this monument is any acknowledgement of Grant’s two terms as America’s 18th president, in which he pushed vigorously, and unsuccessfully, for the racial equality promised in reconstruction.  But perhaps that too is readable in the deep ambivalence of this commemoration of victory."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0105,
                38.8946
              ]
            },
            "properties": {
              "name": "Japanese-American Memorial to Patriotism During World War II",
              "image": "./monument_data/japaneseAmericanMonument/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Not all national monuments clamor for attention.  This memorial, on a quiet street just north of the Capitol grounds among some nondescript office buildings, is not one that tourists are likely to find by chance.  This is an “expiatory” monument, one intended to publicly atone for past actions.  It presents a very different tone from the more blustery monuments our nation erects to many of its other events.  It is reminiscent of the paradigmatic early 19thcentury expiatory chapel in Paris, meant to atone for the worst excesses of the French Revolution.<br />"+
              "<br />The viewer enters into a calm, spare space, minimally landscaped with a reflecting pool containing jagged rocks that contrast with the otherwise smooth surfaces of water and stone walls.  It contains a single piece of figural art: a large cast bronze sculpture of two Japanese cranes tangled in barbed wire.  Standing high atop a distressed pedestal, they are the only thing higher than the stone walls, blank on the outside, that shelter, or perhaps hide from view, the events commemorated inside. According to the National Japanese American Memorial Foundation, which sponsored and commissioned the structure, there are two cranes to reflect “the duality of the universe”, a conception which surely reflects the Taoist religious beliefs that suffuse Japanese culture.  The commission goes on to explain in more detail the iconography of the subject.  “Their right wings are held flush to the sides of the base by an incluse [sic] strand of barbed wire.  The birds have grasped the wire in their beaks in an attempt to break free.  The sculpture is symbolic not only of the Japanese American experience, but of the extrication of anyone from deeply painful and restrictive circumstances.”<br />"+
              "<br />The intention here is surely a tragic but healing vision, engaging the sky and offering in the present some redemptive attitude toward the past.   But this generous conception is held back unfulfilled in several ways by its overall context.  First is the name itself.  This is not deemed a monument, after all, but a memorial.  That is, it does not represent a continuing ideal, like the statue of Liberty or the statue of Freedom at the top of the Capitol dome.  Rather, it is a memorial, something solely about the past, like any tombstone.<br />"+
              "<br />This monument is meant as both acknowledgement and apology to a nation’s treatment of its own.  At the heart of this monument is an official governmental apology for America’s decision to place nearly 120,000 Japanese-Americans in internment camps during WWII.  It is part of a long-standing public campaign to receive an official apology for this shameful action, which reached fruition in the passage of legislation in the 70s and 80s. Through them, the US government not only officially apologized for the internment but also made monetary reparations to descendents of the families.<br />"+
              "<br />Yet much as the structure encourages the viewer toward a contemplative melancholy, it is also a bit puzzling.  For it might make one wonder how “patriotism” is illustrated, or for that matter just what a “memorial to patriotism” even means.  A walk around the, unusually laconic, walls (nearly one third of them blank) makes somewhat clearer what is intended, but also how the present filters out aspects of the past.  Among the many wall panels that simply state the names and number of internees of the many camps are a few of text.  In the process of describing the internment is inserted a paragraph hailing the accomplishments of Japanese-American soldiers who served in the military of the same nation that captured its parents and relatives as enemies. Their names are inscribed elsewhere, in tiny lettering and partly obscured by planting.  “Patriotism” has long served as a good tool to wash away irony.<br />"+
              "<br />Here, though, the concept of patriotism does even more work in shaping/obscuring the whole story.  The wall also includes quotations from various politicians central to the campaign for apology, such as long-time Congressmen Norman Mineta, Robert Matsui and Daniel Inouye.  There is even a laudatory text to the Japanese-American soldiers at their 1946 reception by President Harry Truman.  Yet the monument also includes a text by Mike Masaoko, identified solely as a former soldier and “civil rights advocate.” It states, in part, “I am proud that I am an American of Japanese ancestry.  I believe in this nation’s institutions, ideals and traditions…” These words were actually published by him in 1940, part of a pamphlet called the Japanese American Creed.  Masaoko and his organization, the Japanese American Citizens League, had actually collaborated with the internment process.  For this reason, some on the planning board of the memorial objected to privileging his words.  They failed, and after the memorial’s opening, a petition campaign to the National Park Service to remove them was also rejected. Moreover, this controversial and problematic inclusion is matched by an equally dubious exclusion of any acknowledgement of those who protested and resisted the internment.<br />"+
              "<br />Thus while the Japanese American Memorial to Patriotism During World War II inscribes into stone the words of Ronald Reagan “Here we admit a wrong,” it also works to distinctly sanitize an event.  Its many blank walls are almost teeming with what might be on them, acknowledging the full scope of the tragedy of internment, and filling out the true nature of the pain that its cranes seek to overcome."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0365,
                38.8814
              ]
            },
            "properties": {
              "name": "Thomas Jefferson Memorial",
              "image": "./monument_data/thomasJeffersonMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Today Thomas Jefferson–primary author of the Declaration of Independence, scientist, diplomat, scholar and, almost incidentally, 3rd President of the United States–seems paramount among the forbears we would wish to monumentalize. Yet while monuments to Washington and Lincoln were both begun less than 50 years after their respective deaths, Jefferson’s took more than a century to get going. Indeed, the current site itself was originally earmarked for a monument to Republican Theodore Roosevelt, and was turned instead to Jefferson quite late in the process. Teddy Roosevelt’s memorial was shifted to a nearby island in the Potomac.  Politics, y’know. As the modern National Mall took shape in the early 20th century, after Franklin Roosevelt and the Democrats took the reins of government in 1933, they were eager to put someone of their party in the new place of honor, to match the prominent Lincoln Memorial erected in 1922.  Teddy Roosevelt was a Republican.  The Lincoln and Jefferson monuments were built within two decades under governments led by opposing parties. Not surprisingly, there’s a certain competition between the two monuments as well.<br />"+
              "<br />The domed, white marble structure of the Jefferson Memorial bears some resemblance to the two buildings most associated with Jefferson, his home Monticello and the rotunda at the core of the University of Virginia campus. Behind that, and perhaps even more influential, is the Roman Pantheon.  The architect of the monument is John Russell Pope, Washington’s “architect of empire” and first recipient of the Rome prize of the recently instituted American Academy in Rome. Pope’s buildings, rather like antiquities in modern Rome, often bear little resemblance or scale with those around them. They bring to the capitol a unique atmosphere of untroubled Olympian grandeur which it still exudes at places.   These grandiose structures embody the high-minded nobility sometimes associated with government service in a slightly less jaded time, while today they are more often overlooked or simply seen as challenges to HVAC systems.  In any case, because they are such laconic, unornamented structures, it’s always fun to watch the patterns made by raindrops as they dry on their vast, blank walls.<br />"+
              "<br />Pope’s design borrows (emulates? steals? outdoes?) several features of the Lincoln Memorial. It too inscribes the president’s words on its walls, though now rather misleadingly, as we shall see. It borrows another feature central to Lincoln’s majesty: the vast rows of steps which here actually partly circle the structure. But its chilly, precise classicism is quite different from Henry Bacon’s monument to Lincoln. The Lincoln Memorial has precisely rendered Doric columns and other features derived from classical antiquity, but its façade also adapts the past for modern identity, for instance by carving throughout it the names of American states and date of their entry into the Union. Pope’s Jefferson Memorial, by contrast, is far more of excruciating exactitude to ancient models, hewing to precise details of the Ionic order, its cornice lined with egg-and-dart molding. If Lincoln appears in his monument as a man for all time, Jefferson is presented as something more like a pagan god.<br />"+
              "<br />Four panels of quotations from Jefferson’s extensive writings dominate the interior of the rotunda, seemingly emanating directly from the figure they encircle. In fact, they are a selective pastiche, highly edited and often juxtaposing sentences, and even phrases, within the same paragraph. They were chosen by an undersecretary of the Interior, Saul Padover, who had published an adulatory biography of Jefferson in 1942. One panel is devoted solely to the Declaration of Independence, certainly the most important and appropriate text for the monument. Amazingly, as it compresses sections from the preamble and conclusion to the document, it omits five words solely because the architect wanted to save space. But this is just the first intimation that Jefferson may have been cut to fit the monument, rather than vice-versa. James Loewen reads and tracks these quotes in detail, and has pointed out the many selected edits and juxtapositions that make Jefferson sound like an abolitionist and upholder of racial morality and harmony. In fact, he owned two different slave plantations, and was quite intimately involved with the slaves he owned.  To its credit, the historic site of Monticello now acknowledges much more of this matter, including the six children of his slave Sally Hemings who were fathered by Jefferson himself. Loewen concludes “Thomas Jefferson was a great and yet a complex man. The Jefferson Memorial does not do justice to his complexity.”<br />"+
              "<br />In fact, the very question of racial conflict and its erasure is inherent in the very site of the Jefferson Memorial, even before considering the monument itself.  It is located at the tidal basin at the edge of the Mall, on land reclaimed by the Army Corps of Engineers in the early 20th century. This location did not first serve as a monument site at all, but, from 1917, as a beach for Washingtonians. For white Washingtonians, that is.  Blacks could swim only in more dangerous, unimproved places, as DC ‘s only public pool at the time was whites-only as well.   In 1925, the Senate, led by senators from Kentucky and Alabama, voted to close the beach entirely rather than consider creating something even less than equal for blacks.   Which opened it up as the place to put a monument.  Here racial conflict is even quite literally buried by the monument."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0103,
                38.9474
              ]
            },
            "properties": {
              "name": "Adams Memorial (Rock Creek Cemetery)",
              "image": "./monument_data/adamsMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "When tourists, or your visiting relatives, or pretty much everyone else comes to Washington for the first time, they most often want to see the museums and monuments on the Mall. By contrast, my own rarefied tribe of art historians frequently have at the top of their list this relatively small and distant memorial.  Looking at it closely brings up another aspect of monuments and memorials that we know is there but hardly ever really address, namely art.  Monuments are physical, designed things, after all, and central to the way they communicate and persuade is how artfully they use their physical elements.  Yet we often get so lost in what monuments are saying that we lose our hold on how the monument says it.  It seems to me there are two reasons for this (beside the fact that plenty of monuments are dreadful as artistic objects).  First, monuments like it this way.  Most monuments are talky, even tendentious things determined to persuade us something about a person, event, culture etc.  Any good rhetorician knows that concealing the artfulness of his/her message can make it more persuasive.  But beyond the artfulness of seeming artless, we simply pay less attention in everyday life to the style on the surface of a monument (and perhaps have less common vocabulary for it) than the message we want to find within.  For instance, even the overbearing, hard-to-stylistically-ignore World War II Monument mostly functions as a way for military veterans to address the subject of the war itself, not to promote awareness of the vast piles of stone and metal arrayed in front of one’s eyes.”<br />"+
              "<br />The Adams memorial, by contrast, is almost the polar opposite of such monuments.  But this is not so much because it is a memorial rather than a monument, but rather because it mainly consists of style, of art itself, its subject evanesced into near-invisibility.”<br />"+
              "<br />This memorial was erected by Henry Adams to his wife Marian Hooper Adams, called “Clover” after her suicide in 1885.   The descendant of two presidents, Henry Adams was a true American Mandarin, with all the privilege, breeding, travel experience and social connections that most of us can just read about in Henry James novels.  Adams’s own memoir of 1918, The Education of Henry Adams, is a classic statement of a Bostonian aristocratic worldview just then on the brink of disappearing.  But while the book details much of Adams’ life and times, it skips over the late 19thcentury in a strange, abstract tone with little mention of Clover at all.  Adams refers to himself throughout in third person.  There is virtually nothing in the book to connect with the actual visual imagery or design of the memorial.  But if there is little in the way of subject material we can use to read the monument, there is much in the memorial’s own material history to look at it with.  Adams employed two of the grandest and most celebrated figures of the time in its construction.  His pal the architect Stanford White laid out the plot design.  White was partner in what was just possibly the grandest and most influential architectural firm America has ever produced, fundamental to whatever “American Renaissance” we ever had in architecture.  The bronze figure itself is the work of Augustus St. Gaudens, likely the most prolific, honored, influential public sculptor and designer of the selfsame “American Renaissance” then at its height.”<br />"+
              "<br />St. Gaudens produced a large-scale bronze of a seated figure, with a face—serene, eyes-closed—just peeking out from an ample gown and shrouded head.  Oblivious, at peace, asleep the figure sits before a stone panel topped by a classical molding, across from a red granite bench offering the viewer a place to likewise sit and contemplate the scene.  Further, White  surrounded the entire space by trees, creating a sort of natural chapel which sets it off from the rest of the cemetery.   The space is unidentified by the usual words and markers of memorials.  There is no statement of the name of the decedent. In fact, Adams himself was also laid to rest there.  But what might seem anonymous in our conventional terms is a reflection of the Eastern-influenced emphasis of Adams on a universal experience, untied to any particular individual and bringing all together.  Not only are there no name markers, but the sculpture itself is unsigned. Even more, St. Gaudens used both male and female models in designing the sculptural figure, whose identity is this also not confined to gender, or relegated to traditional Western “allegorical” uses of female figures.  Adams himself stated “The whole meaning and feeling of the figure is its universality and anonymity.”  Adams also lamented that the work had become a minor tourist attraction, whose title was sometimes given as “Grief.”  But this reflects a (rather snobbish) diffidence about other social classes as much as the nature of representation.  Even St. Gaudens had a title for his work, “The Mystery of the Hereafter and the Peace of God That Passeth Understanding.”  What could it mean to say that nothing specific is being represented?  And that if you see anything else you are wrong?”<br />"+
              "<br />At stake here is who gives a work its meaning, and how a monument interacts with its audience.  In some contemporary art about monuments this very question is put on display.  But here already, at the end of the 19thcentury, this moving and lyrical work brings up in its own way a fundamental question."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0193,
                38.8719
              ]
            },
            "properties": {
              "name": "Titanic Memorial",
              "image": "./monument_data/titanicMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "This extraordinary memorial is quite unlike the majority of Washington’s many monumentalized objects.  Appropriately enough, it is now even physically located far from them.  Yet this memorial also says much about American monuments, even though it is in many ways distinct.   After all, it does not refer to any action of American government or commerce or even any event that took place on American soil.  The RMS Titanic was a British ocean liner that sailed from Southampton in 1912 en route to New York with well over 2,000 people on board.   Only four days out of port it struck an iceberg and sank.  More than half of all aboard perished, largely due to inadequate lifeboat capacity.  In personal terms, the tragedy of the Titanic mostly befell British nationals: especially its crew of over 800, almost half from Southampton itself.  The most numerous of its passengers were the more than 700 in steerage (“third class”), who beside UK nationalities were largely from Central and Eastern Europe, the Middle East and Asia (particularly Hong Kong).  It is only the Titanic’s 300-some First-Class passengers—mingled British aristocrats, international glitterati, and American social and economic elite—that allow Americans to share in the tragedy.”<br />"+
              "<br />Most of the many memorials to the Titanic victims are based on identity, either individual or in small groups.  There are those to the engineers of the ship in 1914, or the victims from Belfast in 1920, for instance. In fact, Washington also has a memorial of this sort in the Butt-Millet memorial fountain erected by federal decree on the Ellipse in 1913.  It is dedicated to two Americans, Army Captain Archibald Butt and his companion Francis Davis Millet, a political operative involved in the Taft administration. They were last seen playing cards in the first-class cabin.  This monument, to a closeted gay couple, is a good example of how queer sexuality is normalized in the monumental landscape.”<br />"+
              "<br />But the Titanic Memorial vividly demonstrates how events are remade over time, not least in terms of reinforcing gender roles.  By 1931, in the height of the Great Depression, this event from before the Great War began to take on the mystique it still holds, token of an earlier, romantic, and doomed world.  It was funded by a nationwide campaign led by a handful of wealthy socialites, and indeed designed by one of their own, Gertrude Vanderbilt Whitney, remembered today most of all for her patronage of the arts.  Whitney’s monument is not dedicated to the victims as a whole (both male and female) in remembrance.  Instead, its inscriptions speak for “the women of America” in gratitude to “the brave men” who “gave their lives that women and children might be saved.”  These American women give their thanks to men everywhere, “the young and the old, the rich and the poor, the ignorant and the learned, all who gave their lives nobly to save women and children.”  Whatever differences of means or culture or age may divide men throughout the world (and on the microcosm that was the Titanic) are minimized in the face of the larger imperative that all men recognize a common, implicitly heterosexual, attitude and duty toward women and family.”<br />"+
              "<br />Whitney’s monument, perhaps her masterpiece of public art, is simple and moving.  Above a white stone exedra, a nude male stands in a cruciform position, covered in long, flowing folds of drapery.  His eyes are closed and head tilted back.  The posture suggests standing stalwart in a strong wind, while the composition connects to Christian allegories of sacrifice and resurrection.  It’s an image and an ideal for more recent times. This very posture, struck by Kate Winslet, serves as very emblem of the experience of the Titanic in James Cameron’s 1997 film Titanic. It testifies also to the continued, almost archetypal, appeal of the Titanic as nostalgia site.  Indeed, even before the film came out, a group of swells, the Men’s Titanic Association, aspire to Leonardo di Caprio-ness by meeting in black tie every April 15th (the night of the disaster) for a dinner consisting of the first-class menu on the ship, with champagne from a vineyard operating at the time.   Afterward there is midnight wreath-laying at the monument, as the guys revel in the praise the monument offers up.”<br />"+
              "<br />A classically-trained sculptor, Gertrude Vanderbilt Whitney had more success in shaping public sculpture in Washington than any other city, culminating in the Titanic monument.  Scion of the highly-prosperous Vanderbilt family, she married in 1896 the perhaps even more prosperous investor and speculator Harry Whitney.  While the campaign for the monument had gone on for more than a decade, it saw fruition at the moment of Harry’s death in 1930 and Gertrude’s inheritance of 72 million dollars, immense for its time. The following year saw not just the dedication of the Titanic memorial but also the opening of Gertrude’s path-breaking museum, the Whitney Museum of American Art.  Thus private capital most shines its power out, for better or worse, at a moment of inequality like that of the Great Depression.”<br />"+
              "<br />The Titanic Memorial was originally located at the very end of New Hampshire Ave. by the Potomac river, the closest DC gets to a roiling ocean.  In fact, in 1936 the entire monument was submerged in water as the river spectacularly overflowed its banks, a sort of symbolic reenactment of its origin.  This is also a reminder that its original Washington neighborhood bears the mariner-unfriendly name of Foggy Bottom. In 1966 it was removed when the Kennedy Center was to be located on the same spot and soon relocated to its current higher ground, where it continues to exert its obscure but palpable influence."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.9780,
                38.8811
              ]
            },
            "properties": {
              "name": "Congressional Cemetery",
              "image": "./monument_data/congressionalCemetery/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "This cemetery came into being at just the time when those who first established and ran the federal government began to need eternal housing. For over 50 years (from 1823 to 1876), it was directly funded by the US Congress. Congressional Cemetery is the final resting place of many from the courts of 19th century government: Senators such as Henry Clay and John C. Calhoun, legendary Madam Mary Ann Hall, first ladies Dolly Madison and Abigail Adams, John Philip Sousa, Elbridge Gerry (both signer of the Declaration of Independence and inventor of gerrymandering), Robert Mills (architect of the Washington Monument) and many others. Despite the growth of alternative sites, it also houses central political figures of the 20th century such as J. Edgar Hoover, Thomas P. “Tip” O’Neil, Tom Lantos and Washington’s erstwhile four-term mayor Marion Barry.”<br />"+
              "<br />Most cemeteries of powerful places present this sort of compression of time through personalities, and sum up a place in individuals, however ironically. But Congressional Cemetery in not just a mirror but a part of the city and its government. The cemetery is laid out in a grid pattern that extended Pierre L’Enfant’s original design for the city of Washington itself, made almost 20 years earlier. Among its most striking grave monuments are 171 identical stone cenotaphs designed in 1817 by Benjamin Henry Latrobe, architect of the US Capitol.   These structures create a remarkable forest of forms, based on a design that bespeaks Enlightenment rationalism, with virtually no connection to traditional Early American funerary forms. It’s sort of an imposed “big government” approach to death.”<br />"+
              "<br />Located two miles or so down grand, stately Pennsylvania Avenue from the Congress, Congressional Cemetery also has played a role in state funerals, of presidents like Zachary Taylor, William Henry Harrison and John Quincy Adams and other central governmental figures. This is a kind of pomp as important in its time as the inaugural parades that still proceed every four years down the other portion of the same street.”<br />"+
              "<br />But perhaps the greatest example of Congressional Cemetery’s continuing role among the living is that it has what may be the world’s only defined LGBT section. One can find throughout the cemetery striking and unconventional monuments to gay and lesbian couples, notably that of Kenneth Dresser and Charles Fowler.   But even more notable is the area centered around the 1988 grave of Leonard Matlovich, a highly decorated Vietnam veteran who challenged the ban on gay servicemen. His grave is a sort of shrine, a setting for the slogan at its center “ When I was in the military they gave me a medal for killing two men and a discharge for loving one.” At this cemetery social justice is not dead."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -76.9902,
                38.8898
              ]
            },
            "properties": {
              "name": "Emancipation Monument (Freedmen’s Lincoln Memorial)",
              "image": "./monument_data/freedmensLincolnMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "This cemetery came into being at just the time when those who first established and ran the federal government began to need eternal housing. For over 50 years (from 1823 to 1876), it was directly funded by the US Congress. Congressional Cemetery is the final resting place of many from the courts of 19th century government: Senators such as Henry Clay and John C. Calhoun, legendary Madam Mary Ann Hall, first ladies Dolly Madison and Abigail Adams, John Philip Sousa, Elbridge Gerry (both signer of the Declaration of Independence and inventor of gerrymandering), Robert Mills (architect of the Washington Monument) and many others. Despite the growth of alternative sites, it also houses central political figures of the 20th century such as J. Edgar Hoover, Thomas P. “Tip” O’Neil, Tom Lantos and Washington’s erstwhile four-term mayor Marion Barry.”<br />"+
              "<br />Most cemeteries of powerful places present this sort of compression of time through personalities, and sum up a place in individuals, however ironically. But Congressional Cemetery in not just a mirror but a part of the city and its government. The cemetery is laid out in a grid pattern that extended Pierre L’Enfant’s original design for the city of Washington itself, made almost 20 years earlier. Among its most striking grave monuments are 171 identical stone cenotaphs designed in 1817 by Benjamin Henry Latrobe, architect of the US Capitol.   These structures create a remarkable forest of forms, based on a design that bespeaks Enlightenment rationalism, with virtually no connection to traditional Early American funerary forms. It’s sort of an imposed “big government” approach to death.”<br />"+
              "<br />Located two miles or so down grand, stately Pennsylvania Avenue from the Congress, Congressional Cemetery also has played a role in state funerals, of presidents like Zachary Taylor, William Henry Harrison and John Quincy Adams and other central governmental figures. This is a kind of pomp as important in its time as the inaugural parades that still proceed every four years down the other portion of the same street.”<br />"+
              "<br />But perhaps the greatest example of Congressional Cemetery’s continuing role among the living is that it has what may be the world’s only defined LGBT section. One can find throughout the cemetery striking and unconventional monuments to gay and lesbian couples, notably that of Kenneth Dresser and Charles Fowler.   But even more notable is the area centered around the 1988 grave of Leonard Matlovich, a highly decorated Vietnam veteran who challenged the ban on gay servicemen. His grave is a sort of shrine, a setting for the slogan at its center “ When I was in the military they gave me a medal for killing two men and a discharge for loving one.” At this cemetery social justice is not dead."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0593,
                38.9125
              ]
            },
            "properties": {
              "name": "Oak Hill Cemetery",
              "image": "./monument_data/oakHillCemetery/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Without a doubt, Georgetown’s Oak Hill Cemetery is certainly the most beautiful and among the most historically important cemeteries in Washington.  Like any good diva, it is eminently aware of both these things.  It is a stunning place, but serves today also as a case-study in both the production and exclusions that have made such a site possible.”<br />"+
              "<br />Established in the mid-nineteenth century, on the inspiration of the Mount Auburn Cemetery in Cambridge, MA, Oak Hill is a major monument of the rise of the picturesque landscape movement in America, associated with landscape designer Andrew Jackson Downing.  The first “rural cemetery” in Washington, it is the project of William Wilson Corcoran, among the most influential and wealthiest of Washington citizens during the 19thcentury.  Its architecture is as cosmopolitan and connected as the people it houses.”<br />"+
              "<br />Next to its characteristic gatehouse is an exquisite Gothic Revival chapel designed by James Renwick.  Renwick also designed the first building of the Smithsonian Institution (the Smithsonian “Castle”), as well as the space which first housed Corcoran’s art collection (today known as the Smithsonian’s Renwick Gallery).  The same Seneca Red sandstone that graces Renwick’s other buildings, and much else of the best of later 19th century Washington architecture, can be found in the structures of Oak Hill.  But it is not just material and patronage that ties Oak Hill to the established power structure, but also its very location. It stands among other still-commodious land parcels of upper Georgetown, notably Dumbarton Oaks to the west and Evermay to the south.”<br />"+
              "<br />In this age of hyper-capitalism and amid DC’s booming real estate market, the relative timelessness and almost palpable serenity that is maintained in these places is striking, and already a notable historical feature to them. Rather than succumb to market-forces (as we are sometimes told by neo-liberal commentators is inevitable to pretty much everything), these three places have, in different ways, internalized capital to maintain their original selves.  Oak Hill, in this, has been far more successful than Corcoran’s other main enterprises, the Riggs Bank and Corcoran Gallery of Art, which after more than a century no longer exist, both victims of their own mismanagement as well as the demands of modern times.  Looking at Oak Hill today in light of our present historical situation, sheds some light on what survives these days, and just how the seeming past is preserved.”<br />"+
              "<br />Oak Hill has always been the preserve of well-to-do and connected Washingtonians: politicans, government functionaries, military leaders, diplomats, celebrities, captains of industry.   It is an archive of who did well, and the artistic beauty of its varied monuments testifies to that.  It includes statuary by Augustus St. Gaudens, sculptor of the “American Renaissance” as well as a rare monument by Lewis Comfort Tiffany, king of Art Deco. Oak Hill is also what might be called a “destination cemetery” as several monuments were moved to it from elsewhere, a sort of trading up in the afterlife.  Several of these came from nearby Volta Park, but also among them is the huge Grecian-inspired rotunda of John Peter Van Ness, DC mayor during the 1830s. He died in 1846, before Oak Hill existed.  His remains and mausoleum were moved to Oak Hill much later, in 1872, now seeming eternal at the top of a gentle rise.  Perhaps most characteristic of the continuing tensions of power and representation is another story.  Philip and Katharine Graham represent two generations of owners of the Washington Post, Washington’s unrivaled herald of political power.  They are buried in simple graves in the shadow of the Renwick chapel. Yet soon after the recent death of Ben Bradlee, general editor under Ms. Graham, his remains were enshrined in an entire mausoleum, on the cemetery’s main drive, an affront to preservationists and breach of applicable land use laws.  DC almost immediately changed the land use laws, but in the meantime the public was allowed a view of how an institution maintains itself and its funding base.  The present has a way of managing the past.”<br />"+
              "<br />Enshrining and eternalizing the powerful, of course, also means going along with the power structure of the times, not least in its then-dominant assumptions about race.  It is not clear that a single African-American is buried in Oak Hill.  For a striking contrast of continuing racial inequality one need only look right next to Oak Hill.  On its southeastern edge, the elegant, contemplative spaces of Oak Hill are separated from two African American burial grounds in shocking disrepair.”<br />"+
              "<br />As the New York Times described it in 2016 “On one side is Oak Hill, a lush slope of well-tended graves of congressmen, publishers and cabinet members who were, with few exceptions, white. On the other side is the Mount Zion and Female Union Band Society Cemetery. There, broken gravestones lie in large piles and dogs and their owners have taken the place of mourners for the slaves, freedmen and mostly black citizens buried below.”  The current overseer of Oak Hill was asked whether he had ever seen a ghost at the cemetery.  His answer was “No. Everybody at Oak Hill is happy.  What better place could there be?”  But the boundaries of the cemetery are then also the boundaries of such eternal happiness.  This surely explains why so many have clamored to get in and jockeyed for position within, but is also a doleful contrast to other available venues and the racial structure they embody."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0541,
                38.9111
              ]
            },
            "properties": {
              "name": "Mount Zion Cemetery",
              "image": "./monument_data/mountZionCemetery/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Mount Zion Methodist Episcopal, Montgomery Street Methodist and Female Union Band Society Cemeteries [known collectively as Mt. Zion Cemetery]”<br />"+
              "<br />Begun 1808, closed to burial 1950”<br />"+
              "<br />Segregation hardly ends with death.  It can be eternal.  There is no more poignant testimony to this fact than the view from the tiny, cramped hill of this decaying burial ground to just across the rusting chain-link fence that separates it from the beautiful and pristine setting of the Oak Hill Cemetery. Whereas Oak Hill has interred and lionized the famous, powerful and connected from its founding in 1848 this, even older, cemetery has quite a different story.  The accomplishments of Mt. Zion’s residents (for instance Clement Morgan, the first African-American to graduate Harvard College and Harvard Law School) are buried in the historical record.  Seen together, these two contiguous burial zones are not just a single landscape of death and burial, but also one of racial discrimination and its continuing consequences.”<br />"+
              "<br />Georgetown’s African-American history is submerged in its current public image.  In fact, it was a separate municipality from the federal district until 1871, a tobacco and shipping port on the Potomac in which slavery and slave trading were freely practiced until 1862   The center of the African-American community in Georgetown was Herring Hill, almost a self-supporting community on the East side next to Rock Creek, far from the grand mansions of the town to north and west. Those who now live in its tony (and renovated) houses may not realize that their charming diminutive dimensions are related to the fact they are former slave quarters.  At the center of this community were the black churches that to this day bind together congregations despite the fact that parishoners now mostly must return to worship from more affordable, and distant, real estate.”<br />"+
              "<br />At the very top of this neighborhood, on the highest hill, the Montgomery Street Methodist Church established a burial ground in 1808.  Founded before the nation itself, in 1772, the Montgomery Street Church was open to all, as was its cemetery.   Blacks and whites, however, were buried in separate sections. The grounds were later leased to Mt. Zion, a black church which splintered off from Montgomery, and took possession of the grounds in 1879.  This growth in racial division is mirrored by burial practices.   Beside the Mt. Zion church itself, the western end of the cemetery was sold to the Female Union Band Society, a benevolent society of free African-American women, begun in 1842.   As blacks in Georgetown consolidated around Mt. Zion, whites, of course, were now buried in Oak Hill.  Many whites buried in Mt. Zion were subsequently disinterred and moved by their families. An enclosure built into the side of the hill of Mt. Zion is reputed to have served as a respite for escaped slaves on the Underground Railway.”<br />"+
              "<br />The contrast between Oak Hill and Mt. Zion brings out a striking dimension in the history of landscape architecture.  Oak Hill represents the vanguard of the then-new picturesque burial ground movement then spreading throughout the US.  Mt. Zion is a paradigm of the older “churchyard burial ground” design that it replaced.  Even the history of design is also a history of privilege, allocated by means and power. And while Oak Hill is kept up perfectly and celebrated, Mt. Zion has fallen almost into oblivion.  It has taken all the energy of the church more recently to keep it from being built over by real estate interests.  In this they have succeeded, at least for now.”<br />"+
              "<br />Unlike many burial grounds of its type, beneficiary of Georgetown’s arcane development laws that fetishize its past and recent historic preservation movemments,  Mt. Zion remains a visible scar of the tensions of Washington, a thoughtful monument in edifying disrepair.   It was closed to burial and declared a health hazard in 1950.  But Mt. Zion is not lost.  Its signage and burial stones moved and damaged, its grounds themselves threatened with overgrowth, it has also attracted some who have worked to recuperate it, to make visible what is buried within it, perhaps most of all, to redirect its future."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0505,
                38.9118
              ]
            },
            "properties": {
              "name": "Letelier/Moffitt Memorial",
              "image": "./monument_data/orlandoLetelierMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Designer, Ned Echeverria”<br />"+
              "<br />This tiny monument on “Embassy Row” memorializes the victims of a horrific politically-motivated attack. In the process it alludes to an American legacy that is rarely celebrated in the official landscape of symbols.”<br />"+
              "<br />A circular bronze plate about two feet in diameter seems to be exploding upward from paving stones. On the plate we see two likenesses in low relief. They are a man and a woman, born decades apart but with a common date of death, September 21, 1976.   Precisely five years after that event, this monument was dedicated at the very location where their murder took place. It even refers to the nature of the attack.”<br />"+
              "<br />In 1971 Orlando Letelier was appointed Chile’s ambassador to the US under the democratically-elected, Socialist-leaning government of Salvador Allende. Many governments worked to destabilize, if not overthrow this new “communist” regime, not least the US of President Richard Nixon and Secretary of State Henry Kissinger. Two years later, the military coup led by General Auguste Pinochet put an end to five decades of democracy in Chile.”<br />"+
              "<br />Letelier was brought back to Chile, brutally tortured for 12 months, and ultimately expelled and stripped of Chilean citizenship. He continued to speak out against the regime, and found a position in the progressive Institute for Policy Studies, one of the leading “think tanks” that adhere to the governmental structure based in Washington. He was driving a car to work, together with his assistant Ronni Moffitt, then aged-25 and her newlywed husband, Michael, who sat in the back. At a point going around Sheridan Circle, a huge explosion took place under the driver’s seat, the result of a plastic explosive placed in the chassis of the car, which blew a “circular hole, 2 to 2 ½ feet in diameter” in the car. Letelier was killed instantly and Roni Moffitt died within the hour.   Michael crawled out the back window, and ultimately survived.”<br />"+
              "<br />A massive FBI investigation made clear that this murder was committed by Chilean operatives at the behest of Pinochet. Indeed, in 2016, after Pinochet’s death and Chile’s return to democracy, a Chilean court has reopened its investigation into the murder (and others committed in the US) and requested extradition of Pinochet-era figures for trial.”<br />"+
              "<br />While so many of Washington’s official monuments seek to impress by their often hoary vastness, this tiny monument on “Embassy Row”, privately funded, speaks back to them eloquently. This monument trades grandeur for modesty and heroic abstraction for particularity. It is among the first to focus on victims and makes visible the real consequences of America’s role in the world."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0490,
                38.9101
              ]
            },
            "properties": {
              "name": "Taras Shevchenko Monument",
              "image": "./monument_data/tarasShewchenkoMonument/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Foreign policy is an abstract, evanescent thing to most Americans.  But not in Washington, which is full of monuments that are a sort of physical substrate of American geopolitical interests.  While alliances and enmities shift over the years, the objects themselves remain, permanently occupying some of the most prominent public spaces.  The Cold War, in particular, makes its presence felt, with the ungainly kind of Socialist Realist art that is now out of favor in the former Soviet Union and its dependencies.  It looks pretty weird here too.”<br />"+
              "<br />In just a few blocks of the western part of Dupont Circle, the edge of “Embassy Row”, one can find prominent sites dedicated to (among others) the Hungarian Lajos Kossuth, the Czech Tomas Masaryk and the Ukranian Taras Shevchenko, who has become a virtual icon of his land.    Shevchenko’s memorial is the largest and most prominent.  Though its inauguration in 1964 was attended by nearly 100,00 people, in the more than 15 years I lived next door to it, it was almost always empty, except as a meeting place for local jogging and exercise groups.  A large, almost totally unrelieved stone expanse, it brings to the dense urban streetscape something of the sterile, brutalist aesthetic that especially dominated Eastern Europe at the time of its making.”<br />"+
              "<br />The memorial itself stands at the top of the flat stone plaza. It consists of two seemingly unrelated objects.  One is a bronze statue of Shevchenko, “Bard of the Ukraine” dressed in characteristic 19thcentury garb, and high up upon a pedestal.  His demeanor and flowing Romantic coiffure are those of a young man walking defiantly forward.  To the left of this bronze statue is a light stone relief about half as high.  Though not explained anywhere on the monument, it represents the Greek hero Prometheus, who was chained to a rock for stealing fire from the gods.  It is odd to see ancient Greek literature illustrated here, while Shevchehnko’s own poetic work is represented only by a couplet from his poem “The Caucasus” on the back of the same relief.   However confused the details, the general thrust is (sorta) clear.  Shevchenko too is a hero, though a vulnerable, enchained one (looking for a savior).  The monument presents Prometheus as a sort of double to Shevchenko.  In the Greek myth, Prometheus was ultimately rescued by the hero Hercules.  The role of Hercules here, the hero to Ukraine, is, of course, the United States.”<br />"+
              "<br />The statue’s inscription states that the monument is dedicated to “the liberation, freedom and independence of all captive nations.” It mentions in passing that Shevchenko was a “19thcentury Ukrainian poet” but takes much more time to describe him as a “fighter for independence of Ukraine and the freedom of all mankind who under foreign Russian/imperialist tyranny appealed for ‘the new and righteous law of Washington.’”  That last quotation within the inscription derives from an 1857 poem of Shevchenko.  On the monument, it neatly elides Washington, the man, to whom Shevchenko was appealing in the 19th century, with Washington the city and apparatus of American government in the 20th, which thunderingly approved the monument’s construction and message.”<br />"+
              "<br />The committee that sponsored and oversaw the monument included former president Herbert Hoover as honorary chair, and found numerous congressional backers after a letter-writing campaign by Ukrainian Americans.  In its time, the early 1960s, backing the monument represented a simple way to both proclaim the anti-Communism that dominated the times and consolidate domestic political backing.  The vast crowd that attended in 1964 began by singing the Star Spangled Banner and ended with the Ukrainian anthem “Ukraine Has Not Yet Died.”  This programmatic choice may explain something of the memorial’s own design.  It speaks certainly to the “dependency theory” by which a small, endangered country associates itself with a great power for not just protection but identity, regardless of economic outcome.”<br />"+
              "<br />Ukrainian Americans would appear to have a certain advantage in getting monuments built, due to their particular oppressor.   In 2015, a second monument to Ukrainian suffering was unveiled near Union Station.  This commemorates the victims of the “Holodomor,” the 1932-3 wheat famine suffered there.  By contrast, there is no monument, for instance, to the Irish Potato Famine in Washington, at least as crippling a famine.   Similarly, the only museum dedicated to the Armenian Genocide is located solely online, Republican leaders having even rejected legislative acknowledgement of the event.”<br />"+
              "<br />Perhaps it is not surprising that only certain politically advantageous sufferings and disasters are monumentalized in Washington. It is nonetheless striking how such events are heroized and purified even in their own time.   As the Washington Post editorial board pointed out at the time of the proposal of the memorial, Shevchenko was not only obscure to most Americans, he was anti-Polish and anti-Semitic, two features offensive to considerable groups of Americans.  Moreover, even though the monument sets him as anti-communist hero, he had long been absorbed in the Soviet canon as a hero.  Thus while the Soviet authorities initially objected to the monument, they eventually asked to take part in the dedication.  Much like bills and sausages, monuments are also not such pretty things to see being made.  There were numerous calls to review or even downright cancel the monument from governmental authorities ranging from the Department of the Interior to the National Capital Planning Commission.  As in more recent times, sheer political power overcame the municipal and governmental, as national controlled local.  The grueling controversy over the Shevchenko Monument led to the director of the National Park Service (which administers and controls the monument today) to call for “the curtailing of statuary” in Washington.  Not for the last time.”<br />"+
              "<br />Nonetheless, the Shevchenko Memorial has become part of the landscape of Washington, DC, one of the city’s many connections to the broader world.  In 2010 it made a most Washington kind of sight, as an orange banner hung from Shevchenko’s arm, his own contribution to the “Orange Revolution” in his native land.   It’s a sure sign you can never predict just what, or how, a monument will represent, or just what the world will bring up next.  As I write this, Ukraine has emerged as target of the Trump administration, and the monument is a perfect place for something to emerge  in response."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0434,
                38.9097
              ]
            },
            "properties": {
              "name": "Dupont Circle Fountain",
              "image": "./monument_data/dupontCircleFountain/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Dupont Circle is among the most culturally complex public spaces in Washington, almost an essay in irony.  It is both an officially-built site for opposition to officialdom and a privately-sponsored landscape for public engagement.”<br />"+
              "<br />In a city that largely stands for politics in America, Dupont Circle has long played the role of our Washington Square or Hyde Park: the predominant site of popular expression and opposition.   Dupont Circle is close enough to official-powered Washington and its private enablers to be heard there, yet also far enough away to not be on their turf.  It is where protest marches commonly begin or end after touring through enemy lines.  A week never seems to pass without some demonstration: organized or spontaneous, with few or many participants, about issues both domestic and international.  The Circle itself gives its name to the neighborhood, an area resonant, complex and famous enough to be a novel.  Its past few decades of upscaling and yuppification mask a longer history of housing marginalized communities, and—its core value—even more vigorous protests.”<br />"+
              "<br />But why here?  All of DC is fair game for protest, after all, from the vast expanses of the Mall to the lawns and parks by the White House, Capitol and Supreme Court buildings.   But there is something homey, dramatic, enframed (and thus suitable for both police observation and impressive photography) about the space of Dupont Circle, culminating in the fountain at its center.  Perhaps even more, there is something of familiarity to the space of Dupont Circle, and also of play, an essential for any good protest.  In some sense just hanging out there doing nothing, or playing chess, in sight of the office buildings and law firms to the south, as well as their business-dressed minions walking through, is already an act of resistance.”<br />"+
              "<br />Dupont Circle might be deemed an example of unintended design.  Its location as a crossroads is clearly set in the original design for urban Washington, Pierre L’Enfant’s 1791 plan.  But that spot on the plan had nothing particular designated for it and stayed largely undeveloped for nearly a century.”<br />"+
              "<br />The circle was created in 1871 and renamed eleven years later for (what else?) a prominent military hero: Rear Admiral Samuel Francis Du Pont.  It was originally a lushly planted Victorian garden with walking paths through the space.  At the circle’s center was a statue of the Admiral in uniform, binoculars in hand looking vigilantly over viewer’s heads.  Launt Thompson’s statue is a smaller, even perhaps more approachable image of a Civil War hero than the many gallants on horses who dominate other circles.  But he was also perhaps a bit overwhelmed by the grand planted setting in which he was set. Indeed, while the grounds of many traffic circles kept their heroes honored just by offering nothing else for the viewer to see but a man on a high horse, and so were largely empty of people, the larger Dupont Circle, with its explicit walking paths, rather de-heroized its namesake by bringing him down to earth.  By the early 20thcentury, the statue was ill-tended and came to tilt sharply forward, leading to various jokes about tippling sailors.”<br />"+
              "<br />But Admiral Du Pont had an advantage unmatched by any of his monumentalized Civil War cohort: a devoted, super-rich, blue-blood family, unsatisfied with the fate of their forbear. The Du Ponts of Delaware owned the nation’s largest chemical/explosive company, then in its heyday.  At the family’s behest, and with them footing the bill, an entirely new scheme was employed on the circle, which opened to the public in 1921.  The new fountain was designed by Daniel Chester French and the entire area redesigned by Henry Bacon.  The same duo was then at work on the Lincoln Memorial (to be dedicated the following year) and the same general principles followed.  Rather than an urban oasis in which to be refreshingly lost, the circle was a point to take in the long perspective of Connecticut Avenue.  This is the same design principle of the Mall and other urban foci, in line with the general project for a new monumental capital. It is the Washington still known colloquially as “the city of magnificent distances.”   Thus while most of Washington’s circles and squares were basically designed once in either 19thor 20thcentury urban principles, Dupont has had the unique means and good fortune to stay stylish.”<br />"+
              "<br />In the process of its makeover, Dupont’s likeness disappeared, and his life allegorized. The fountain’s wide base names Dupont, but spends at least as many words mentioning that there used to be a government-approved image of him.  The fountain itself is a high, white marble structure from the top of which water falls in sheets.  Behind it are carved in high relief three allegorical figures on the fountain’s circular shaft.  These tall, willowy, sort of Pre-Raphaelite figures are both male and female, representing the sea, stars and wind.  Perhaps appropriately for DC’s original gay neighborhood, the male figure, wind, almost playfully hides his naked body, and even suggests a gender-bending take on Botticelli’s Birth of Venus with the billowing sail around him.  None of this is likely to have occurred to the sculptor French, perhaps the leading maker of public sculpture of the time , but it embodies how new audiences can bring subversive meanings, a fundamental way that monuments continue to engage.  Opposition is even a way of looking."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0321,
                38.9057
              ]
            },
            "properties": {
              "name": "Monument to General Thomas",
              "image": "./monument_data/monumentToGeneralThomas/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "The experience that most Washingtonians have most of the time of the monuments of the city is of the looming men on horses at the foci of the many traffic circles in the central core.   That is to say, while we know they are there, we barely ever notice them.  While driving (or even walking) we have to pay close attention to where we’re going to negotiate the horrendous traffic that the circles in particular seem to generate.  The circle is a sort of cordon sanitaire around the monument keeping us from paying real attention to it. The same goes for the people in the circle, which is one reason the municipal authorities accept protesters gathering in them.”<br />"+
              "<br />There is also a psychology involved.  Writing of another imperial capital, Vienna, in 1926, Robert Musil well observed that “nothing is more invisible than a monument.”  Visitors to our art museums, such as the National Gallery of Art and the Smithsonian Art Museums, are most often initially drawn to highly-publicized temporary exhibitions.  Less common, though often more rewarded, are dedicated viewers to the matchless permanent collections of these institutions.  The city’s monuments, in a sense, are its ultimate permanent collection: things you think you can always come back to really look at later, if you’re still interested. They are no match for the more temporary delights you’d better get while they’re hot, from events to restaurants.”<br />"+
              "<br />Which is a pity, since so much of Washington’s actual topography is experienced around these monumentalized military men.  They are a signifying unit inscribed on the city’s urban fabric, extending the monumental feel of the Mall throughout the city as a whole.  To Washingtonians, Farragut, Ward, Logan, Scott, Grant, McPherson, McLellan, etc. represent places—public circles and squares, stops on the metro, landmarks for giving directions—far more than individuals.  Of course, almost all cities have places and objects designed to memorialize its significant people.  But in Washington the stakes are higher.  Here local identity is edged out by national identity: primarily those men who led the wars of the 19thcentury.   Notably, the Civil War, today our most contentious and controversial, is represented almost exclusively by those of Union soldiers (with one striking exception that proves the rule). This has hardly escaped partisans of the Confederacy, who have erected their own monuments elsewhere, some of almost comically vast proportion, to proclaim, or perhaps scream out, their own history.”<br />"+
              "<br />The monument to Major General George Henry Thomas is one of a group of 18 of the most prominent of them, set aside in 1978  for historic recognition (and National Park Service maintenance).   It is often said to be among the best of its type: the equestrian statue, which abounded especially in Washington.  Thomas appears as a commander of resolute vision. He    sits astride his horse, having removed his hat for a full view of the battlefield. The slight upward tilt of the terrain suggests a hillcrest or other command point.  The general calmly surveys the terrain despite the wind that flares the horse’s nostrils and blows his mane.  He is elevated on a high, elliptical base with minimal inscription.”<br />"+
              "<br />The public dedication of the statue in 1879, less than a decade after Thomas’s death, was attended by an estimated 50,000 viewers, including many former Union soldiers.  It was an occasion not only to revisit a triumph but also to remake the image of a leader.  The earliest of Washington’s grand celebratory military equestrian statues was the 1853 statue of Andrew Jackson as revolutionary war general, the first colossal bronze statue cast in the US.  Rather bizarrely, it presents Jackson carefully holding his hat near his head while astride a springing horse with front hooves elevated far above the ground.  All portrait sculpture must have the head free to be viewed, which could present a problem for portraying a military man in uniform.  By contrast, the sculptor of the Thomas statue, John Quincy Adams Ward, found a far better solution to the problem of the hat than the befuddled Clark Mills, sculptor of the Jackson statue, who had never seen a full-scale equestrian monument before he created one.”<br />"+
              "<br />But dealing with the horse is an even greater challenge in such a monument, and has led to many different configurations of horse and rider.  The bewildering variety of horse positions in American military monuments has led to a long-lived myth that they represent something significant about the soldier’s death.  In actuality, the physical relation of horse and rider is an aesthetic decision.  The bombastic charge of the horse that Jackson sits on looked so bizarre and off-putting that legislators even took up the role of art critics.  Thus the congressional contract for the Thomas monument stipulated that the horse must have at least three hooves on the ground.  The bombastic conception of Jackson’s dramatic image connects to an earlier Romantic tradition associated particularly with Russia, while that of Thomas as stately, dignified leader goes back much farther, from Neo-Classicism to the venerable realm of Roman emperors.”<br />"+
              "<br />But it is almost like the monuments are speaking only to each other on these questions, suspended over your head or preserved in pedestrian-only parklands, as you have plenty of other things on your mind in just dealing with the traffic.  Which is a last particular quality of the Thomas monument and its many brethren throughout Washington. They come from an age before automobiles, and a different conception of time.  They think you may just have enough time to look at them. Alas, they are mostly mistaken."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0221,
                38.8976
              ]
            },
            "properties": {
              "name": "Daguerre Monument",
              "image": "./monument_data/daguerreMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Not the least of the questions of a monument is whether it is art.  The Daguerre Monument, literally an object in a Smithsonian art museum, is a work of art that itself monumentalizes the medium of photography.  At the same time, especially at its current location, it serves also as a public monument (or more exactly a memorial).  Which just brings up more questions.”<br />"+
              "<br />Commissioned by the Photographers Association of America in 1889, exactly fifty years after the public announcement and instant acclaim of Daguerre’s photographic invention, the work was immediately given to the Smithsonian.  Like many another object in the Smithsonian collections, it is thus a token by which an industry works to legitimate itself.  This particular object has been extraordinarily successfully not only in justifying its makers but even further raising the status of their profession.  After spending some time in storage starting in the 1960’s, in 1989, one hundred years after its conception, it was placed outside the museum, visible to passersby on 7th street.  It sponsor was the same, albeit renamed organization, the Professional Photographers of America.  It is probably the only artwork of the museum that most people see.  From its origin, that is, this monument, in a near-perfect condition thanks to the government funds that supported its conservation, brings up questions of the privatized ties of a federal agency and, by association, the authority of the historical record of a national museum.”<br />"+
              "<br />The Daguerre monument also provides a perspective on the public image of photography itself and its global uses.   This monument does not merely put Daguerre on a pedestal but also the entire globe.  Daguerre’s head appears as a sort of emblem leaning against the vast globe.  The head was modeled after a photograph made in Paris by an American photographer but has somehow become three-dimensional, sculpted in high relief and jutting out oddly from a frame held by a kneeling female figure representing Fame.  Photography is not itself depicted on the monument.  Its real subject is the global dominion of the medium, making the globe a large backdrop to Daguerre himself, the theatre for his invention.  From its inception, photography was indeed widely practiced throughout the world, and among its specialties was circulating images of distant places and exotic peoples around the world (though that was hardly its only use).  The Daguerre monument frames this activity with a particular geopolitical orientation, placing directly above Daguerre’s head the expanse of the Atlantic Ocean and thus making Europe and America bracket the great man.   Thus even if photography is acknowledged as a global art, the monument also establishes some parts of the globe as more visible than others.  All parts of the monument—globe, likeness and two pedestals—are tied together by a somewhat menacing-looking garland of laurels that curls throughout and continues into the viewers space, presumably referring to the continuing presence of photography in the present day.”<br />"+
              "<br />Though you would never know it from this monument, who actually invented photography is a vexed question among historians.  While the publicly prominent Daguerre, in France, was celebrated by the French government as the medium’s inventor, at just about exactly the same time an Englishman, William Henry Fox-Talbot, had independently established a competing photographic process.  Indeed, both were predated by others, such as Nicéphore Niépce (who showed his work to Daguerre after he took what was likely the first photograph).  In the 19thcentury, great national debates took place in Europe over who was first and which process had priority claim.  Daguerre’s process (called Daguerreotype) created a direct impression on a metal plate.  Fox-Talbot’s process (which he called Calotype) instead created a unique negative which could then be used to make one or more identical “positive” prints. For the times when the monument was created, in 1889, and then moved to its position of greater prominence, 1989, the negative-positive, multiple-image process invented by Fox-Talbot was vastly more popular, and lucrative, than the cumbersome, single-image process of Daguerre. It is thus especially mysterious, why the monument singles out Daguerre when it might just as easily present the larger picture of both inventors.  No American was involved in the invention, so it is hardly a question of national pride.   Just what is it, then?  The monument leaves us with this very question."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0236,
                38.8935
              ]
            },
            "properties": {
              "name": "Original FDR Memorial",
              "image": "./monument_data/originalFDRMemorial/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "This is a monument of extreme simplicity, which explains itself in detail in a plaque by its side. It states:”<br />"+
              "<br />“In September 1941 President Franklin Delano Roosevelt called his friend, Supreme Court Justice Frankfurter, to the White House and asked the justice to remember the wish he then expressed:”<br />"+
              "<br />“If any memorial is erected to me, I know exactly what I should like it to be. I should like it to consist of a block about the size of this (putting his hand on his desk) and placed in the center of that green plot in front of the archives building. I don’t care what it is made of, whether limestone or granite or whatnot, but I want it plain without any ornamentation, with the simple carving, “In Memory of _______________’”.”<br />"+
              "<br />A small group of living associates of the president, on April 12, 1965, the twentieth anniversary of his death, fulfilled his wish by providing and dedicating this modest memorial.””<br />"+
              "<br />This monument is indeed modest, though it is white Vermont marble rather than the slightly more austere stones requested by the president. It fits inconspicuously on the grounds of the National Archives, a small addition to the vast stone façade and grounds of the building. The names of the friends who supported it are anonymous, sealed in a container inside the monument.”<br />"+
              "<br />But this simple monument highlights a complicated question about monuments: who decides on them?  Does a president have the right to exclusively monumentalize himself in a public space? From almost as soon as he died, in 1945, there had been a movement to create a monument to FDR. From the early 1960’s, a potential site on the Mall had been fixed upon, and a series of designs had been whittled down to a finalist, a striking modernist monument consisting of a series of 130-foot long slabs with quotations from FDR. The Roosevelt family had publically objected to it and Washington’s Commission of Fine Arts (a board of art and architecture specialists who police the Mall for aesthetic harmony) ultimately rejected the design.”<br />"+
              "<br />The National Archives building was the first major governmental building in Washington designed by John Russell Pope. Deigned “this temple of our history” it was the first of a series of precise, ornate neo-classical builidngs that proliferated during FDR’s presidency, culminating with the Jefferson Memorial, also designed by Pope. These buildings still embody the conservative, traditionally-minded aesthetic of official Washington. Thus the plot in front of the archives building that FDR requested for his monument, had been created during his presidency. He ultimately chose to join the architectural and decorative ensemble that he was instrumental in creating.”<br />"+
              "<br />But the plan for a larger FDR memorial continued, of course, so today there are two actual monuments to him in two different locations. He is not the only such figure in the monumental landscape of Washington, DC to be dually represented, there’s also Lincoln, for instance.  The public image of FDR, perhaps the most consequential president of the 20th century, is thus one that he placed a mark on, but is larger than him or his family, and is only one of a variety of images he holds in public memory.”<br />"+
              "<br />The New York Times’s coverage of the dedication of the FDR monument (4 April 1965, 60) quotes the president’s son, Franklin Delano Roosevelt, Jr. on the modern design, calling it “not in keeping with my father’s rather classical tastes in architecture.” But he also acknowledged that his family would not try to halt construction of the larger monument, keeping private interests separate from public processes. In this, Roosevelt’s children were more magnanimous than other more recent scions of famous politicians (like that Eisenhower family), a matter which bedevils monument building in Washington to this day."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0157,
                38.8946
              ]
            },
            "properties": {
              "name": "Albert Pike Statue",
              "image": "./monument_data/albertPikeStatue/image1.png",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "Surely the most heated issue with monuments in America today is the question of confederate monuments.  Many erected by highly partisan organizations long after their side lost the Civil War, they have often pushed to rewrite the war and deny the racist, inhumane, and treasonous drive to secession that motivated those who waged it.  Moreover, now more than two years after the horrifying events of Charlottesville, the persistence of these monuments is an issue with not just crucial political significance but even bears overtones for public safety, given the drive to violence they still can underwrite.  The outdoor, public monuments of Washington, DC (capital of the Union, after all) largely exclude the leaders of the opposition forces.”<br />"+
              "<br />But there is one striking, covert exception.  At the corner of 4thand D streets, facing the exit of the Judiciary Square metro, is an imposing monument of stone and bronze, 27 feet high, enshrining one Albert Pike.   Work of a renowned Italian sculptor, Pike inhabits the sky above the viewer. His beard and flowing hair, as well as his right hand’s gesture, invite comparison with the figure of God the Father in Michelangelo’s famous painting in Rome’s Sistine Chapel.”<br />"+
              "<br />Who is this near-deity? The monument is surprisingly laconic, giving only Pike’s name and life dates. Well below him on the monument, an allegorical female figure in bronze holds a staff bearing a shield, easily identifiable as that of the Freemasons. An inscription confirms that it was created by the Supreme Council of the Scottish Rite of Freemasonry and erected in 1901.  Eight single words on the monument’s base list a variety of roles, among them orator, poet, philosopher, jurist and, notably, soldier (though not commander).  But placing Pike and the span of his life on public, federally-controlled land enshrines much more than a Mason.  There are other words that might also belong on the base: notably traitor and racist.”<br />"+
              "<br />Pike was an almost divine figure to the Masons.  Having joined in 1853, he protected, nurtured and fundamentally remade the Masons’ Southern Jurisdiction, Masonry’s original home in the US and one of its two divisions covering the entire country.  Pike actually lived in Washington’s Masonic headquarters at the end of his life and is today literally entombed in its current vast edifice on 16thstreet.  A thick, official modern history of the Masons from 1861 to 1891 (the year of Pike’s death) mentions him on virtually every page.  This same history portrays Pike on its frontispiece: but not in the garb of a Mason at all, but that of a Confederate general.”<br />"+
              "<br />Pike’s Confederate service record is appalling, even to Confederates.  The only battle at which he commanded a sizable number of troops was the “disaster” of Pea Ridge.  That isn’t my term but that of Arkansas historian J.G. Fletcher, who states Pike “had perhaps done more to produce the disaster at Pea Ridge than any other man on that field.”  Not least, there were reports of atrocities committed by the fighters specifically under Pike’s command.  A larger view is that of James McPherson, a definitive Civil War authority “…the battle of Pea Ridge was the most one-sided victory won by an outnumbered Union army during the war.””<br />"+
              "<br />Pike’s shameful military record has always haunted his monument.  For days before its consecration on October 23, 1901 the statue had been wrapped with an American flag, as if to smother it in patriotism.  The day of the ceremony, Congressman James D. Richardson of Tennessee and others went out of his way to address, and neutralize, the matter. Richardson had sponsored the 1898 legislation to provide federal land for the statue.  He was also, what a surprise!, the Masonic Grand Commander who served as Pike’s successor on the Supreme Council of the Scottish Rite Temple.  Yet a different voice, a contemporary newspaper editorial, stated “the act of erecting such a monument [to Pike] in the [federal] reservation would be a disgrace to every Union soldier.””<br />"+
              "<br />But monumentalizing Pike’s life invites onto the pedestal even more that is deeply unsavory: the entire racist impetus that did not disappear after the Confederate defeat, and still adheres today.  Pike had also been a leader of the virulently anti-Immigrant Know-Nothing Party and went on to edit a pro-Klan newspaper in Memphis (the very state in which the KKK was founded).”<br />"+
              "<br />Most historians and biographers of Pike (except those sponsored by the Masons) mention to one degree or another the shadowy Ku Klux Klan in connection with Pike’s words and actions.  Because of these associations, the statue has been repeatedly picketed, starting in the late 1980’s.  There is a continuing drive to remove it from public federal land, which has been stymied only by the complexities of government bureaucracy, and a DC official’s understandable hesitation before the federal behemoth.”<br />"+
              "<br />Strikingly, the Masons have made clear they don’t want the statue at their headquarters a mile or two, despite its vast, empty public plaza, and the fact that Pike is literally entombed inside the building.  Which brings up the question of what the Masons dothink about their forbear. In May 2018, the head librarian of the current Masonic temple told me that in the early 1990s the Masons had read all relevant literature and found nothing that supported Pike’s having any Klan affiliation.  This is puzzling to an independent researcher.  It doesn’t take much work to find Michael and Judy Ann Newton’s 1991 The Ku Klux Klan: An Encyclopedia, which declares unequivocally that Pike was “an early Klansman and co-author of the KKK’s original prescript”.  Allen W. Trelease’s meticulously researched work of 1971, White Terror: The KKK Conspiracy and Southern Reconstruction is only slightly more circumspect, stating Pike “may well have affiliated with the Klan”, finding him “sympathetic with the Klan’s stated objectives.” These statements and other similar ones are based on considerable documentation and careful weighing of existing evidence.  More than one early history of the Klan identifies Pike by name as a central and founding figure.”<br />"+
              "<br />Pike’s monument is the only one to a Confederate in outdoor space in Washington.  There’s a big slew inside in the US Capitol building, where Southern state representatives long had prerogative to enshrine their state’s confederate heroes.  But even this collection is changing with the times.  All of which goes to show, that even though monuments seem vast and immovable, they are really anything but."
            }
          }
        ]
}; 

monuments.features.forEach(function(monument, i){
    monument.properties.id = i;
});

map.on('load', function (e) {
/** 
    * This is where your '.addLayer()' used to be, instead
    * add only the source without styling a layer
*/
    map.addSource("places", {
        "type": "geojson",
        "data": monuments
    });
    addMarkers();
});

        
/**
  * Add a marker to the map for every store listing.
**/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  monuments.features.forEach(function(marker) {
  /* Create a div element for the marker. */
  var el = document.createElement('div');
  /* Assign a unique `id` to the marker. */
  el.id = "marker-" + marker.properties.id;
  /* Assign the `marker` class to each marker for styling. */
  el.className = 'marker';
            
  /**
    * Create a marker using the div element
    * defined above and add it to the map.
  **/
  new mapboxgl.Marker(el, { offset: [0, -23] }).setLngLat(marker.geometry.coordinates).addTo(map);
  
  /**
    * Listen to the element and when it is clicked, do three things:
    * 1. Fly to the point
    * Pop up information on that monument in the sidebar
    * 2. Close all other popups and display popup for clicked store
    * 3. Highlight listing in sidebar (and remove highlight for all other listings)
  **/
  el.addEventListener('click', function(e){
    /* Fly to the point */
    flyToStore(marker);
    createMonumentSidebar(marker);
    /* Close all other popups and display popup for clicked store */
    //createPopUp(marker);
    /* Highlight listing in sidebar */
    //var activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    //if (activeItem[0]) {
    //  activeItem[0].classList.remove('active');
    //}
    //var listing = document.getElementById('listing-' + marker.properties.id);
    //listing.classList.add('active');
  });
});
}
  
/**
  * Use Mapbox GL JS's `flyTo` to move the camera smoothly
  * a given center point.
**/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates
    //zoom: 15
  });
}
  
/**
  * Create a Mapbox GL JS `Popup`.
**/
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup'); //mapboxgl-popup
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat(currentFeature.geometry.coordinates) //currentFeature.geometry.coordinates
    .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
      '<h4>' + currentFeature.properties.address + '</h4>' + '<p>' + currentFeature.properties.description + '</p>')
    .addTo(map); 
}

// --- WORKS it creates the monument sidebar ---
function createMonumentSidebar(currentFeature) {
  var sidebarInfo = document.getElementById("sidebar-monument");
  sidebarInfo.innerHTML = '<h1 id="location-title">' + currentFeature.properties.name + '</h1>' + 
    '<img id="sidebar-image" src="'+currentFeature.properties.image+'"/>' +
    /*'<h3 id="monument-address">' + currentFeature.properties.address + '</h3>' + */
    '<p id="monument-sidebar-text">' + currentFeature.properties.description + '</p>';/* +
    '<br /><br />' +
    '<a id="b-button" href="">More information</a>'; */
  sidebarInfo.style.display = "block";
}

// function for listOfMonuments.html
function createListOfMonuments() {
  var list = document.getElementById("list");
  list.innerHTML = '<ul>' +
    '<li>TEST</li>' +
    '</ul>';
  list.style.display = "block";
}


      /*--------------- WORKS

        // add markers to map
        monuments.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
        });

       //------ test
 
      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'monuments', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
 
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
 
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });
      /*
      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'monuments', function() {
        map.getCanvas().style.cursor = 'pointer';
      });
 
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'monuments', function() {
        map.getCanvas().style.cursor = '';
      });
    });
    // -----test */



      /*
      // This will let you use the .remove() function later on
      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
          if (this.parentNode) {
              this.parentNode.removeChild(this);
          }
        };
      }

      mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbC1icmFkeSIsImEiOiJjazZ0eXpjbmswM295M25wYTZvZTk2cTQxIn0.JCkxaVnjRNg-SxCvzX-Ykg';

      // Add the map to the page
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-77.034084142948, 38.909671288923],
        zoom: 13,
        scrollZoom: true
      });

      var nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'top-left');

      
      var monuments = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0353,
                38.8895
              ]
            },
            "properties": {
              "image": "(202) 234-7336",
              "name": "Washington Monument",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "at 15th St NW"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -77.0091,
                38.8899
              ]
            },
            "properties": {
              "image": "(202) 507-8357",
              "name": "United States Capitol",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "description": "at 22nd St NW"
            }
          }
        ]
      }; 

      //--------------- WORKS

        // add markers to map
        monuments.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
        });
        //--------------------------------------------------------------------------*/