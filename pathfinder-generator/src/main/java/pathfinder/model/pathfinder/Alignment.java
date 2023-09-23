package pathfinder.model.pathfinder;

import pathfinder.model.Description;
import pathfinder.model.Id;

public enum Alignment {
    LAWFUL_GOOD("alignment:lg", "Lawful Good", "A lawful good character acts as a good person is expected or required to act. She combines a commitment to oppose evil with the discipline to fight relentlessly. She tells the truth, keeps her word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished."),
    NEUTRAL_GOOD("alignment:ng", "Neutral Good", "A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them."),
    CHAOTIC_GOOD("alignment:cg", "Chaotic Good", "A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he’s kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society."),
    LAWFUL_NEUTRAL("alignment:ln", "Lawful Neutral", "A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount. She may believe in personal order and live by a code or standard, or she may believe in order for all and favor a strong, organized government."),
    NEUTRAL("alignment:n", "Neutral", "A neutral character does what seems to be a good idea. She doesn’t feel strongly one way or the other when it comes to good vs. evil or law vs. chaos (and thus neutral is sometimes called “true neutral”). Most neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character probably thinks of good as better than evil—after all, she would rather have good neighbors and rulers than evil ones. Still, she’s not personally committed to upholding good in any abstract or universal way."),
    CHAOTIC_NEUTRAL("alignment:cn", "Chaotic Neutral", "A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn’t strive to protect others’ freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those others suffer). a chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as he is to cross it."),
    LAWFUL_EVIL("alignment:le", "Lawful Evil", "A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order, but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises."),
    NEUTRAL_EVIL("alignment:ne", "Neutral Evil", "A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple. She sheds no tears for those she kills, whether for profit, sport, or convenience. She has no love of order and holds no illusions that following laws, traditions, or codes would make her any better or more noble. On the other hand, she doesn’t have the restless nature or love of conflict that a chaotic evil villain has."),
    CHAOTIC_EVIL("alignment:ce", "Chaotic Evil", "A chaotic evil character does what his greed, hatred, and lust for destruction drive him to do. He is vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are likely to be poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him.");

    private final Id id;
    private final String longName;
    private final Description description;

    public Id id() {
        return id;
    }

    public String longName() {
        return longName;
    }

    public Description description() {
        return description;
    }

    Alignment(String id, String longName, String description) {
        this.id = Id.of(id);
        this.longName = longName;
        this.description = Description.create(description);
    }
}
