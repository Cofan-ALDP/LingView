import React from 'react';
import { ENGLISH } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const glossaryPageJSX = {
  [ENGLISH] :
  <div>
  <h2>Glossing conventions</h2>
<table>
<tr>
<th>
abbreviation
</th>
<th>
form
</th>
<th>
category
</th>
<th>
meaning
</th>
<th>
F&amp;H
</th>
</tr>
<tr>
<td>
1
</td>
<td style={{fontStyle: "italic"}}>
=ngi
</td>
<td>
cl mtrx, inflex
</td>
<td>
first person subject
</td>
<td>
1
</td>
</tr>
<tr>
<td>
1.PL
</td>
<td style={{fontStyle: "italic"}}>
ingi
</td>
<td>
pronoun
</td>
<td>
first person plural
</td>
<td>
1.PL
</td>
<td>
</td>
</tr>
<tr>
<td>
1.SG
</td>
<td style={{fontStyle: "italic"}}>
ña
</td>
<td>
pronoun
</td>
<td>
first person singular
</td>
<td>
1.SG
</td>
<td>
</td>
</tr>
<tr>
<td>
2
</td>
<td style={{fontStyle: "italic"}}>
=ki
</td>
<td>
cl mtrx, inflex
</td>
<td>
second person subject
</td>
<td>
2
</td>
</tr>
<tr>
<td>
2.PL
</td>
<td style={{fontStyle: "italic"}}>
ke'i
</td>
<td>
pronoun
</td>
<td>
second person plural
</td>
<td>
2.PL
</td>
<td>
</td>
</tr>
<tr>
<td>
2.SG
</td>
<td style={{fontStyle: "italic"}}>
ke
</td>
<td>
pronoun
</td>
<td>
second person singular
</td>
<td>
2.SG
</td>
<td>
</td>
</tr>
<tr>
<td>
3
</td>
<td style={{fontStyle: "italic"}}>
=tsû
</td>
<td>
cl mtrx, inflex
</td>
<td>
third person subject
</td>
<td>
3
</td>
</tr>
<tr>
<td>
3.PL
</td>
<td style={{fontStyle: "italic"}}>
tise'pa
</td>
<td>
pronoun
</td>
<td>
third person plural
</td>
<td>
3.PL
</td>
<td>
</td>
</tr>
<tr>
<td>
3.SG
</td>
<td style={{fontStyle: "italic"}}>
tise
</td>
<td>
pronoun
</td>
<td>
third person singular
</td>
<td>
3.SG
</td>
<td>
</td>
</tr>
<tr>
<td>
ABL
</td>
<td style={{fontStyle: "italic"}}>
=ne
</td>
<td>
case marker
</td>
<td>
ablative case
</td>
<td>
ABL, SO
</td>
</tr>
<tr>
<td>
ACC
</td>
<td style={{fontStyle: "italic"}}>
=e
</td>
<td>
case marker
</td>
<td>
accusative case
</td>
<td>
ACC1
</td>
<td>
</td>
</tr>
<tr>
<td>
ACC2
</td>
<td style={{fontStyle: "italic"}}>
=ve
</td>
<td>
case marker
</td>
<td>
accusative case 2
</td>
<td>
ACC2
</td>
</tr>
<tr>
<td>
ADD
</td>
<td style={{fontStyle: "italic"}}>
=khe
</td>
<td>
info str, inflex
</td>
<td>
additive focus
</td>
<td>
ADD
</td>
</tr>
<tr>
<td>
ADJ
</td>
<td style={{fontStyle: "italic"}}>
=tshi
</td>
<td>
derivational
</td>
<td>
adjectivizer
</td>
<td>
QUAL
</td>
<td>
</td>
</tr>
<tr>
<td>
ADJ.ADV
</td>
<td style={{fontStyle: "italic"}}>
='tshe
</td>
<td>
derivational
</td>
<td>
adjectival adverbializer
</td>
<td>
QUAL.ADVR
</td>
<td>
</td>
</tr>
<tr>
<td>
ADN
</td>
<td style={{fontStyle: "italic"}}>
=a
</td>
<td>
derivational
</td>
<td>
adnominal marker
</td>
<td>
ADJR
</td>
<td>
</td>
</tr>
<tr>
<td>
ADV
</td>
<td style={{fontStyle: "italic"}}>
=e
</td>
<td>
derivational
</td>
<td>
adverbializer
</td>
<td>
ADVR
</td>
<td>
</td>
</tr>
<tr>
<td>
ANA
</td>
<td style={{fontStyle: "italic"}}>
tsa
</td>
<td>
demonstrative
</td>
<td>
anaphoric
</td>
<td>
ANA
</td>
<td>
</td>
</tr>
<tr>
<td>
ANA.ATTR
</td>
<td style={{fontStyle: "italic"}}>
tse'sû
</td>
<td>
demonstrative
</td>
<td>
anaphoric attributive
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
ANA.LOC
</td>
<td style={{fontStyle: "italic"}}>
tse
</td>
<td>
demonstrative
</td>
<td>
anaphoric locative
</td>
<td>
ANA.LOC
</td>
<td>
</td>
</tr>
<tr>
<td>
ANA.PLH
</td>
<td style={{fontStyle: "italic"}}>
tsendekhû
</td>
<td>
demonstrative
</td>
<td>
anaphoric human plural
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
AND
</td>
<td style={{fontStyle: "italic"}}>
-'nga
</td>
<td>
inflex
</td>
<td>
andative motion
</td>
<td>
TRANS
</td>
<td>
</td>
</tr>
<tr>
<td>
APPR
</td>
<td style={{fontStyle: "italic"}}>
=sa'ne
</td>
<td>
inflex
</td>
<td>
apprehensive marker
</td>
<td>
NEGPURP
</td>
</tr>
<tr>
<td>
ASSC
</td>
<td style={{fontStyle: "italic"}}>
=pa
</td>
<td>
derivational
</td>
<td>
associative marker
</td>
<td>
ASSC, ASSOC
</td>
</tr>
<tr>
<td>
ATTN
</td>
<td style={{fontStyle: "italic"}}>
=fa'u
</td>
<td>
derivational
</td>
<td>
attenuative marker
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
ATTR
</td>
<td style={{fontStyle: "italic"}}>
='sû
</td>
<td>
derivational
</td>
<td>
attributive marker
</td>
<td>
ATTR
</td>
<td>
</td>
</tr>
<tr>
<td>
AUG
</td>
<td style={{fontStyle: "italic"}}>
='u
</td>
<td>
derivational
</td>
<td>
augmentative marker
</td>
<td>
AUG
</td>
</tr>
<tr>
<td>
BEN
</td>
<td style={{fontStyle: "italic"}}>
=mbe
</td>
<td>
case marker
</td>
<td>
benefactive case
</td>
<td>
BEN
</td>
<td>
</td>
</tr>
<tr>
<td>
CAUS
</td>
<td style={{fontStyle: "italic"}}>
-ña
</td>
<td>
inflex
</td>
<td>
causative voice
</td>
<td>
CAUS
</td>
<td>
</td>
</tr>
<tr>
<td>
CL.DRN
</td>
<td style={{fontStyle: "italic"}}>
=ki
</td>
<td>
classifier
</td>
<td>
diurnal classifier
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
CL.LOC
</td>
<td style={{fontStyle: "italic"}}>
='thi
</td>
<td>
classifier
</td>
<td>
locative classifier
</td>
<td>
LOC.NR
</td>
<td>
</td>
</tr>
<tr>
<td>
CL.PRD
</td>
<td style={{fontStyle: "italic"}}>
=ite
</td>
<td>
classifier
</td>
<td>
periodic classifier
</td>
<td>
TEMP.NR
</td>
<td>
</td>
</tr>
<tr>
<td>
CMP
</td>
<td style={{fontStyle: "italic"}}>
='kan
</td>
<td>
derivational
</td>
<td>
comparative marker
</td>
<td>
CMP
</td>
</tr>
<tr>
<td>
CNTR
</td>
<td style={{fontStyle: "italic"}}>
=ja
</td>
<td>
info str, inflex
</td>
<td>
contrastive focus
</td>
<td>
CONTR
</td>
</tr>
<tr>
<td>
COLL
</td>
<td style={{fontStyle: "italic"}}>
=nakhû
</td>
<td>
derivational
</td>
<td>
collective marker
</td>
<td>
COLL
</td>
<td>
</td>
</tr>
<tr>
<td>
DAT
</td>
<td style={{fontStyle: "italic"}}>
=nga
</td>
<td>
case marker
</td>
<td>
dative case
</td>
<td>
DAT
</td>
<td>
</td>
</tr>
<tr>
<td>
DIST
</td>
<td style={{fontStyle: "italic"}}>
ju
</td>
<td>
demonstrative
</td>
<td>
distal
</td>
<td>
DIST
</td>
<td>
</td>
</tr>
<tr>
<td>
DIST.ATTR
</td>
<td style={{fontStyle: "italic"}}>
ju'sû
</td>
<td>
demonstrative
</td>
<td>
distal attributive
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
DIST.PL
</td>
<td style={{fontStyle: "italic"}}>
ju'e
</td>
<td>
demonstrative
</td>
<td>
distal plural
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
DIST2
</td>
<td style={{fontStyle: "italic"}}>
juva
</td>
<td>
demonstrative
</td>
<td>
distal 2
</td>
<td>
DIST
</td>
<td>
</td>
</tr>
<tr>
<td>
DMN
</td>
<td style={{fontStyle: "italic"}}>
-'kha
</td>
<td>
inflex
</td>
<td>
verbal diminutive
</td>
<td>
DIM
</td>
<td>
</td>
</tr>
<tr>
<td>
DS
</td>
<td style={{fontStyle: "italic"}}>
=si
</td>
<td>
inflex
</td>
<td>
different subject
</td>
<td>
DS
</td>
<td>
</td>
</tr>
<tr>
<td>
EMPH
</td>
<td style={{fontStyle: "italic"}}>
-/
</td>
<td>
inflex
</td>
<td>
emphatic form
</td>
<td>
DUR
</td>
</tr>
<tr>
<td>
ELAT
</td>
<td style={{fontStyle: "italic"}}>
=ye
</td>
<td>
case marker
</td>
<td>
elative case
</td>
<td>
ELAT
</td>
<td>
</td>
</tr>
<tr>
<td>
EXCL
</td>
<td style={{fontStyle: "italic"}}>
=yi
</td>
<td>
info str, inflex
</td>
<td>
exclusive focus
</td>
<td>
EXCL
</td>
</tr>
<tr>
<td>
FRST
</td>
<td style={{fontStyle: "italic"}}>
='ma
</td>
<td>
inflex
</td>
<td>
frustrative marker
</td>
<td>
CNTR
</td>
</tr>
<tr>
<td>
HAB
</td>
<td style={{fontStyle: "italic"}}>
=khe'sû
</td>
<td>
derivational
</td>
<td>
habitual marker
</td>
<td>
HAB
</td>
<td>
</td>
</tr>
<tr>
<td>
HES
</td>
<td style={{fontStyle: "italic"}}>
da
</td>
<td>
independent
</td>
<td>
hesitative particle
</td>
<td>
and
</td>
<td>
</td>
</tr>
<tr>
<td>
HONR
</td>
<td style={{fontStyle: "italic"}}>
='ye
</td>
<td>
derivational
</td>
<td>
honorific marker
</td>
<td>
NPST
</td>
<td>
</td>
</tr>
<tr>
<td>
HORT
</td>
<td style={{fontStyle: "italic"}}>
jinge
</td>
<td>
independent
</td>
<td>
hortative particle
</td>
<td>
ADHORT
</td>
<td>
</td>
</tr>
<tr>
<td>
HORT2
</td>
<td style={{fontStyle: "italic"}}>
jingesû
</td>
<td>
independent
</td>
<td>
hortative particle 2
</td>
<td>
HORT
</td>
<td>
</td>
</tr>
<tr>
<td>
IMP
</td>
<td style={{fontStyle: "italic"}}>
=ja
</td>
<td>
inflex
</td>
<td>
imperative mood
</td>
<td>
IMP
</td>
<td>
</td>
</tr>
<tr>
<td>
IMP2
</td>
<td style={{fontStyle: "italic"}}>
=kha
</td>
<td>
inflex
</td>
<td>
imperative mood 2
</td>
<td>
MIT
</td>
<td>
</td>
</tr>
<tr>
<td>
IMP3
</td>
<td style={{fontStyle: "italic"}}>
='se
</td>
<td>
inflex
</td>
<td>
imperative mood 3
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
IMPV
</td>
<td style={{fontStyle: "italic"}}>
-'je
</td>
<td>
inflex
</td>
<td>
imperfective aspect
</td>
<td>
IMPF, IMPV
</td>
</tr>
<tr>
<td>
INF
</td>
<td style={{fontStyle: "italic"}}>
=ye
</td>
<td>
inflex
</td>
<td>
infinitive marker
</td>
<td>
POST
</td>
<td>
</td>
</tr>
<tr>
<td>
INST
</td>
<td style={{fontStyle: "italic"}}>
=i'khû
</td>
<td>
case marker
</td>
<td>
instrumental case
</td>
<td>
INS
</td>
<td>
</td>
</tr>
<tr>
<td>
INT
</td>
<td style={{fontStyle: "italic"}}>
=ti
</td>
<td>
cl mtrx, inflex
</td>
<td>
polar interrogative marker
</td>
<td>
INT
</td>
</tr>
<tr>
<td>
IRR
</td>
<td style={{fontStyle: "italic"}}>
=ya
</td>
<td>
inflex
</td>
<td>
irrealis mood
</td>
<td>
IRR
</td>
<td>
</td>
</tr>
<tr>
<td>
ITER
</td>
<td style={{fontStyle: "italic"}}>
-CV
</td>
<td>
inflex
</td>
<td>
iterative aspect
</td>
<td>
ITER
</td>
<td>
</td>
</tr>
<tr>
<td>
LAUD
</td>
<td style={{fontStyle: "italic"}}>
='vi
</td>
<td>
affective
</td>
<td>
approbative marker
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
LIM
</td>
<td style={{fontStyle: "italic"}}>
=pi
</td>
<td>
case marker
</td>
<td>
limitative case
</td>
<td>
LIM
</td>
<td>
</td>
</tr>
<tr>
<td>
LOC
</td>
<td style={{fontStyle: "italic"}}>
=ni
</td>
<td>
case marker
</td>
<td>
locative case
</td>
<td>
LOC
</td>
<td>
</td>
</tr>
<tr>
<td>
MANN
</td>
<td style={{fontStyle: "italic"}}>
=ngae
</td>
<td>
case marker
</td>
<td>
manner case
</td>
<td>
MANN
</td>
<td>
</td>
</tr>
<tr>
<td>
MVM
</td>
<td style={{fontStyle: "italic"}}>
-in
</td>
<td>
derivational
</td>
<td>
movement manner
</td>
<td>
SIM
</td>
<td>
</td>
</tr>
<tr>
<td>
N
</td>
<td style={{fontStyle: "italic"}}>
-'pa
</td>
<td>
derivational
</td>
<td>
nominalizer
</td>
<td>
NR
</td>
<td>
</td>
</tr>
<tr>
<td>
NEG
</td>
<td style={{fontStyle: "italic"}}>
=mbi
</td>
<td>
inflex
</td>
<td>
negative polarity
</td>
<td>
NEG
</td>
<td>
</td>
</tr>
<tr>
<td>
NEG.ADV
</td>
<td style={{fontStyle: "italic"}}>
=mbe
</td>
<td>
derivational
</td>
<td>
negative adverbializer
</td>
<td>
NEG, NEG.ADVR
</td>
</tr>
<tr>
<td>
NEG.HAB
</td>
<td style={{fontStyle: "italic"}}>
=ma'sia
</td>
<td>
derivational
</td>
<td>
negative habitual marker
</td>
<td>
NEG.HAB
</td>
<td>
</td>
</tr>
<tr>
<td>
NEW
</td>
<td style={{fontStyle: "italic"}}>
=ta
</td>
<td>
info str, inflex
</td>
<td>
new topic
</td>
<td>
NEW
</td>
</tr>
<tr>
<td>
ONOM
</td>
<td>
(various)
</td>
<td>
independent
</td>
<td>
onomatopoeic interjection
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
PASS
</td>
<td style={{fontStyle: "italic"}}>
-ye
</td>
<td>
inflex
</td>
<td>
passive voice
</td>
<td>
PASS
</td>
<td>
</td>
</tr>
<tr>
<td>
PLC
</td>
<td style={{fontStyle: "italic"}}>
=e
</td>
<td>
case marker
</td>
<td>
place case
</td>
<td>
PLACE
</td>
<td>
</td>
</tr>
<tr>
<td>
PLH
</td>
<td style={{fontStyle: "italic"}}>
=ndekhû
</td>
<td>
derivational
</td>
<td>
human plurality
</td>
<td>
HUM.PL
</td>
<td>
</td>
</tr>
<tr>
<td>
PLS
</td>
<td style={{fontStyle: "italic"}}>
='fa
</td>
<td>
inflex
</td>
<td>
subject plurality
</td>
<td>
PL, PLS
</td>
</tr>
<tr>
<td>
PLV
</td>
<td style={{fontStyle: "italic"}}>
-'-
</td>
<td>
inflex
</td>
<td>
verbal plurality
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
PRCM
</td>
<td style={{fontStyle: "italic"}}>
-ji
</td>
<td>
inflex
</td>
<td>
precumulative aspect
</td>
<td>
PRECUL
</td>
<td>
</td>
</tr>
<tr>
<td>
PRHB
</td>
<td style={{fontStyle: "italic"}}>
=jama
</td>
<td>
inflex
</td>
<td>
prohibitive mood
</td>
<td>
PROH
</td>
<td>
</td>
</tr>
<tr>
<td>
PRSP
</td>
<td style={{fontStyle: "italic"}}>
-yi, -ña
</td>
<td>
inflex
</td>
<td>
prospective form
</td>
<td>
PROSP
</td>
</tr>
<tr>
<td>
PRV
</td>
<td style={{fontStyle: "italic"}}>
me
</td>
<td>
independent
</td>
<td>
privative root
</td>
<td>
NEGP
</td>
</tr>
<tr>
<td>
PRX
</td>
<td style={{fontStyle: "italic"}}>
va
</td>
<td>
demonstrative
</td>
<td>
proximal
</td>
<td>
PROX
</td>
<td>
</td>
</tr>
<tr>
<td>
PRX.ATTR
</td>
<td style={{fontStyle: "italic"}}>
va'sû
</td>
<td>
demonstrative
</td>
<td>
proximal attributive
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
PRX.PL
</td>
<td style={{fontStyle: "italic"}}>
va'e
</td>
<td>
demonstrative
</td>
<td>
proximal plural
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
PRX.PLH
</td>
<td style={{fontStyle: "italic"}}>
vandekhû
</td>
<td>
demonstrative
</td>
<td>
proximal human plural
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
PSTE
</td>
<td style={{fontStyle: "italic"}}>
='the
</td>
<td>
case marker
</td>
<td>
postessive case
</td>
<td>
</td>
</tr>
<tr>
<td>
RCPR
</td>
<td style={{fontStyle: "italic"}}>
-khu
</td>
<td>
inflex
</td>
<td>
reciprocal voice
</td>
<td>
RECP
</td>
<td>
</td>
</tr>
<tr>
<td>
RCUR
</td>
<td style={{fontStyle: "italic"}}>
=se
</td>
<td>
derivational
</td>
<td>
recursive marker
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
RFLX
</td>
<td style={{fontStyle: "italic"}}>
tisû
</td>
<td>
pronoun
</td>
<td>
reflexive singular
</td>
<td>
REFL
</td>
<td>
</td>
</tr>
<tr>
<td>
RFLX.PL
</td>
<td style={{fontStyle: "italic"}}>
tisû'pa
</td>
<td>
pronoun
</td>
<td>
reflexive plural
</td>
<td>
REFL.PL
</td>
<td>
</td>
</tr>
<tr>
<td>
RPRT
</td>
<td style={{fontStyle: "italic"}}>
=te
</td>
<td>
cl mtrx, inflex
</td>
<td>
reportative evidentiality
</td>
<td>
RPT
</td>
</tr>
<tr>
<td>
SBRD
</td>
<td style={{fontStyle: "italic"}}>
='chu
</td>
<td>
derivational
</td>
<td>
nominalizing subordinator
</td>
<td>
NR, SR, SUB
</td>
</tr>
<tr>
<td>
SENS
</td>
<td style={{fontStyle: "italic"}}>
ya
</td>
<td>
demonstrative
</td>
<td>
sensory
</td>
<td>
SENS
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.ANG
</td>
<td style={{fontStyle: "italic"}}>
='khu
</td>
<td>
classifier
</td>
<td>
angular shape
</td>
<td>
SH.ANG
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.DLM
</td>
<td style={{fontStyle: "italic"}}>
=khû
</td>
<td>
classifier
</td>
<td>
delimited space shape
</td>
<td>
SH.DEL
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.FLT
</td>
<td style={{fontStyle: "italic"}}>
=je
</td>
<td>
classifier
</td>
<td>
flat shape
</td>
<td>
SH.FLT
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.FRC
</td>
<td style={{fontStyle: "italic"}}>
=fu'chu
</td>
<td>
classifier
</td>
<td>
fractured shape
</td>
<td>
SH.SCT
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.LAT
</td>
<td style={{fontStyle: "italic"}}>
='fa
</td>
<td>
classifier
</td>
<td>
lateral shape
</td>
<td>
SH.LAT
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.LIN
</td>
<td style={{fontStyle: "italic"}}>
=ki
</td>
<td>
classifier
</td>
<td>
linear shape
</td>
<td>
SH.LNR
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.LRG
</td>
<td style={{fontStyle: "italic"}}>
=jin
</td>
<td>
classifier
</td>
<td>
large shape
</td>
<td>
SH.LRG
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.RND
</td>
<td style={{fontStyle: "italic"}}>
='chu
</td>
<td>
classifier
</td>
<td>
round shape
</td>
<td>
SH.RND
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.SFC
</td>
<td style={{fontStyle: "italic"}}>
='jû
</td>
<td>
classifier
</td>
<td>
surface shape
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.SHR
</td>
<td style={{fontStyle: "italic"}}>
=fi'ndi
</td>
<td>
classifier
</td>
<td>
shard shape
</td>
<td>
SH.SPL, SH.BITS
</td>
</tr>
<tr>
<td>
SH.SPN
</td>
<td style={{fontStyle: "italic"}}>
=si
</td>
<td>
classifier
</td>
<td>
spiny shape
</td>
<td>
SH.SPN
</td>
<td>
</td>
</tr>
<tr>
<td>
SH.TLL
</td>
<td style={{fontStyle: "italic"}}>
=jiun
</td>
<td>
classifier
</td>
<td>
tall shape
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
SMFC
</td>
<td style={{fontStyle: "italic"}}>
-'ñakha
</td>
<td>
inflex
</td>
<td>
semelfactive aspect
</td>
<td>
REP
</td>
<td>
</td>
</tr>
<tr>
<td>
SML
</td>
<td style={{fontStyle: "italic"}}>
=khia
</td>
<td>
derivational
</td>
<td>
similative marker
</td>
<td>
SIMIL
</td>
<td>
</td>
</tr>
<tr>
<td>
SRCN
</td>
<td style={{fontStyle: "italic"}}>
kûintsû
</td>
<td>
independent
</td>
<td>
switch-reference conjunction
</td>
<td>
SWR.CNJ
</td>
<td>
</td>
</tr>
<tr>
<td>
SS
</td>
<td style={{fontStyle: "italic"}}>
=pa
</td>
<td>
inflex
</td>
<td>
same subject
</td>
<td>
SS
</td>
<td>
</td>
</tr>
<tr>
<td>
THUS
</td>
<td style={{fontStyle: "italic"}}>
khen
</td>
<td>
demonstrative
</td>
<td>
manner demonstrative
</td>
<td>
thus
</td>
<td>
</td>
</tr>
<tr>
<td>
VEN
</td>
<td style={{fontStyle: "italic"}}>
-'ngi
</td>
<td>
inflex
</td>
<td>
venitive motion
</td>
<td>
CIS
</td>
<td>
</td>
</tr>
<tr>
<td>
VER
</td>
<td style={{fontStyle: "italic"}}>
='ya
</td>
<td>
inflex
</td>
<td>
veridical mood
</td>
<td>
ASS
</td>
<td>
</td>
</tr>
<tr>
<td>
WH.DEG
</td>
<td style={{fontStyle: "italic"}}>
mi
</td>
<td>
independent
</td>
<td>
wh-interrogative of degree
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
WH.SBS
</td>
<td style={{fontStyle: "italic"}}>
jungae
</td>
<td>
independent
</td>
<td>
wh-interrogative of substance
</td>
<td>
</td>
<td>
</td>
</tr>
<tr>
<td>
WH.SEL
</td>
<td style={{fontStyle: "italic"}}>
ma
</td>
<td>
independent
</td>
<td>
wh-interrogative of choice
</td>
<td>
</td>
<td>
</td>
</tr>
</table>
  </div>,
};

export function GlossaryPage() {
  return <TranslatableText dictionary={glossaryPageJSX} />;
}
