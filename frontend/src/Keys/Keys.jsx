import Imprint from "../components/page-components/policy-center/imprint/Imprint"
import Privacy from "../components/page-components/policy-center/privacy/Privacy"
import Contact from "../components/page-components/policy-center/contact/Contact"
import DSarticle from "../components/page-components/news/discovery-stream/DSarticle"
import DSleaderBoard from "../components/page-components/news/discovery-stream/DSleaderBoard"
import DSmatch from "../components/page-components/news/discovery-stream/DSmatch"

export const POLICY_COMPONENT_MAP = {
    "imprint": Imprint, 
    "privacy": Privacy,
    "contact": Contact,
    default: Imprint,
}

export const POLICY_COMPONENT_INITIAL_STATE_MAP = {
    "imprint": 0, 
    "contact": 1,
    "privacy": 2,
    default: 0,
}


export const DISCOVERY_STREAM_ITEM_MAP = {
    DSarticle, 
    DSleaderBoard,
    DSmatch,
}
