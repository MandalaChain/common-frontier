(function() {var implementors = {
"fp_self_contained":[["impl&lt;AccountId, Call, Extra, SelfContainedSignedInfo, Origin&gt; Applyable for <a class=\"struct\" href=\"fp_self_contained/struct.CheckedExtrinsic.html\" title=\"struct fp_self_contained::CheckedExtrinsic\">CheckedExtrinsic</a>&lt;AccountId, Call, Extra, SelfContainedSignedInfo&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Member + MaybeDisplay,<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Member + Dispatchable&lt;RuntimeOrigin = Origin&gt; + <a class=\"trait\" href=\"fp_self_contained/trait.SelfContainedCall.html\" title=\"trait fp_self_contained::SelfContainedCall\">SelfContainedCall</a>&lt;SignedInfo = SelfContainedSignedInfo&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Extra: SignedExtension&lt;AccountId = AccountId, Call = Call&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SelfContainedSignedInfo: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()